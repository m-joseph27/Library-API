const express = require('express');
const book = require('./book');
const user = require('./user');
const category = require('./category');
// const borrowbook = require('./loan');

const Router = express.Router();
Router
  .use('/book', book)
  .use('/user', user)
  .use('/category', category)
  // .use('/borrowbook', borrowbook)

module.exports = Router;