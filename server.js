const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS, images, etc.)

// Order Route (WhatsApp integration)
app.post('/sendOrder', (req, res) => {
    const { productName, customerName, customerPhone, customerEmail, customerAddress, customMessage } = req.body;

    // Construct the WhatsApp message
    const whatsappMessage = `*Order Details*:\n- Product: ${productName}\n- Name: ${customerName}\n- Phone: ${customerPhone}\n- Email: ${customerEmail}\n- Address: ${customerAddress}\n- Custom Message: ${customMessage}`;

    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number including country code
    const whatsappUrl = `https://wa.me/918955781856?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect the customer to WhatsApp
    res.redirect(whatsappUrl);
});

module.exports = app;
