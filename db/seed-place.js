require('dotenv').config();

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const Place = require('../lib/models/Place');
const dataSet = require('./safe-place-data.json');

connect();

const newSet = dataSet.map(place => ({
  name: place.name,
  category: place.category,
  url: place.url,
  phoneNumber: place.phoneNumber,
  address: {
    streetAddress: place.streetAddress,
    city: place.city,
    state: place.state, 
    zipcode: place.zipcode
  },
  latitude: place.latitude,
  longitude: place.longitude,
  hours: [
    {
      day: 0,
      start: '0900',
      end: '1700'
    },
    {
      day: 1,
      start: '0900',
      end: '1700'
    },
    {
      day: 2,
      start: '0900',
      end: '1700'
    },
    {
      day: 3,
      start: '0900',
      end: '1700'
    },
    {
      day: 4,
      start: '0900',
      end: '1700'
    },
    {
      day: 5,
      start: 'N/A',
      end: 'N/A'
    },
    {
      day: 6,
      start: 'N/A',
      end: 'N/A'
    }
  ]
}));

const seedData = () => {
  return Place.create(newSet);
};

seedData()
  .then(console.log('db loaded'))
  .catch(console.error)
  .finally(() => mongoose.connection.close());
