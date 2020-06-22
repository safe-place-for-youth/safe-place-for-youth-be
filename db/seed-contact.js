require('dotenv').config();

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const Contact = require('../lib/models/Contact');
const dataSet = require('./safe-contact-data.json');

connect();

const newSet = dataSet.map(contact => {
  const placeId = jfkdsljkl;
  
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
