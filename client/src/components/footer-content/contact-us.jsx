import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg leading-relaxed mb-4">
        We would love to hear from you! Whether you have a question about our products, need assistance, or just want to share your thoughts, feel free to get in touch with us.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        You can reach out to us via the following contact details:
      </p>
      <ul className="text-lg leading-relaxed mb-6">
        <li><strong>Email:</strong> <a href="mailto:mamta1998gola@gmail.com" className="text-primary hover:underline">mamta1998gola@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+917300646940" className="text-primary hover:underline">+91 7300646940</a></li>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/917300646940" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></li>
      </ul>
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
