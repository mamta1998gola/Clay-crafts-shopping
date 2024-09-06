const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const Order = require("../../models/Order");
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const { cloneOwnProperties } = require("../../utils");
require('dotenv').config();

// Read and compile Handlebars template
let templatePath = path.join(__dirname, '..', '..', 'templates', 'order-confirmation.hbs');
let source = fs.readFileSync(templatePath, 'utf-8');
let template = hbs.compile(source);

// calctotal
hbs.registerHelper('calcTotal', (quantity, price) => quantity * price);

// Date format
hbs.registerHelper('formatDate', (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString(); // You can customize the locale and options here
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_ACCESS_TOKEN, // Optional, but recommended for efficiency
  },
});

// Controller for sending order email
exports.sendOrderEmail = async (req, res) => {
  try {
    const { orderId, customerEmail } = req.body;

    // Fetch order data from your database using orderId
    const orderData = await Order.findOne({ orderId });

    if (!orderData) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Generate PDF invoice
    const pdfBuffer = await generateInvoice(orderData, customerEmail);

    // Send email with PDF attachment
    await sendOrderConfirmationEmail(orderData, customerEmail, pdfBuffer);

    res.json({ success: true, message: 'Order email sent successfully' });
  } catch (error) {
    console.error('Error sending order email:', error);
    res.status(500).json({ success: false, message: 'Failed to send order email' });
  }
};

// Function to generate PDF invoice
async function generateInvoice(orderData, customerEmail) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      let buffers = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });

      // Add content to PDF (customize as needed)
      doc.fontSize(20).text('Invoice', { align: 'center' });
      doc.moveDown();
      doc.fontSize(14).text(`Order ID: ${orderData._id}`);
      doc.text(`Customer: ${customerEmail}`);
      doc.text(`Total Amount: Rs. ${orderData.totalAmount}.00`);
      doc.moveDown();

      // Add product items
      orderData.cartItems.forEach(item => {
        doc.text(`Product: ${item.title}`);
        doc.text(`Quantity: ${item.quantity}`);
        doc.text(`Price: Rs. ${item.price}.00`);
        doc.moveDown();
      });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

// Function to send order confirmation email with PDF invoice
async function sendOrderConfirmationEmail(orderData, customerEmail, pdfBuffer) {
  // Generate the HTML content by injecting the data
  const data = cloneOwnProperties(orderData);
  const htmlContent = template(data);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: customerEmail,
    subject: `Order Confirmation - ${orderData._id}`,
    html: htmlContent,
    attachments: [
      {
        filename: `Invoice-${orderData._id}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      }
    ]
  };

  await transporter.sendMail(mailOptions);
}
