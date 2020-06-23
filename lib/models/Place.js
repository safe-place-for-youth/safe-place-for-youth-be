const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  }
});

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  url: String,
  phoneNumber: String,
  address: addressSchema,
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  hours: [{
    day: Number,
    start: String,
    end: String
  }]
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }
});

placeSchema.virtual('contacts', {
  ref: 'Contact',
  localField: '_id',
  foreignField: 'place'
});

module.exports = mongoose.model('Place', placeSchema);
