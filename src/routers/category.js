const express = require('express');
const Router = express.Router();
const CategoryController = require('../controller/category');
const cors = require('cors');
// const multer = require('multer');

Router
  .get('/', CategoryController.getCategory)
  .post('/insert', CategoryController.insertCategory)
  .patch('/:id_Category', CategoryController.updateCategory)
  .delete('/:id', CategoryController.deleteCategory)

module.exports = Router;