const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsOption = {
  origin: ['http://localhost:3002'],
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};
const formData = require('express-form-data');

module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json({ extended: false }));
  app.use(formData.parse());
  app.use(helmet());
  app.use(cors(corsOption));
};
