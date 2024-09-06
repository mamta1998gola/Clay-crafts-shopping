const express = require('express');
const router = express.Router();
const invoiceController = require('../../controllers/shop/invoice-controller'); // Adjust the path according to your project structure

// Route for sending order email
router.post('/send-order-email', invoiceController.sendOrderEmail);

module.exports = router;
