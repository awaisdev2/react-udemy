const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
        },
      password: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
