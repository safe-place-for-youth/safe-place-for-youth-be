const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
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
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  hours: [{
    day: String,
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

schema.virtual('contacts', {
  ref: 'Contact',
  localField: '_id',
  foreignField: 'place'
});

module.exports = mongoose.model('Place', schema);
