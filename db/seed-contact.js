require('dotenv').config();

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const Contact = require('../lib/models/Contact');
const contactDataSet = require('./safe-contact-data.json');
const Place = require('../lib/models/Place');

connect();

const newSet = contactDataSet.map(contact => {
  const placeId = Place.find();

  return {
    place: placeId,
    name: contact.name,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
    role: contact.role
  };
});

const seedData = () => {
  return Contact.create(newSet);
};

seedData()
  .then(console.log('db loaded'))
  .catch(console.error)
  .finally(() => mongoose.connection.close());
