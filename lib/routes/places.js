const { Router } = require('express');
const Place = require('../models/Place');

module.exports = Router()
  .post('/', (req, res, next) => {
    Place
      .create(req.body)
      .then(place => res.send(place))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Place
      .find()
      .then(places => res.send(places))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Place
      .findById(req.params.id)
      .then(place => res.send(place))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Place
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(place => res.send(place))
      .catch(next);
  })

  .delete('./:id', (req, res, next) => {
    Place
      .findByIdAndDelete(req.params.id)
      .then(place => res.send(place))
      .catch(next);
  });
