const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  place: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  }],
  name: {
    type: String,
    required: true
  }, 
  email: String,
  phoneNumber: String,
  role: String
});

module.exports = mongoose.model('Contact', contactSchema);
