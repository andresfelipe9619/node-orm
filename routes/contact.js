'use strict';
var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();
router.route('/')
  .get(function (req, res) {
    Contact
      .fetchAll()
      .then(function (contacts) {
        res.json({ contacts });
      });
  })
  .post(function (req, res) {
    new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
    })
      .save()
      .then(function (saved) {
        res.json({ saved });
      });
  })
router.route('/:id')
  .put(function (req, res) {
    Contact
      .where('id', req.params.id)
      .fetch()
      .then(function (contact) {
        contact
          .save({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
          })
          .then(function (saved) {
            res.json({ saved });
          });
      });
  }).get(function (req, res) {
    Contact
      .where('id', req.params.id)
      .fetch()
      .then(function (contact) {
        res.json({ contact });
      })
  }).delete(function (req, res) {
    Contact
      .where('id', req.params.id)
      .destroy()
      .then(function (destroyed) {
        res.json({ destroyed });
      });
  })

module.exports = router;