const express = require('express');
const Router = express.Router();
const bookController = require('../controller/book');
const cors = require('cors');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  },
})
const uploads = multer({
  storage
})

Router

  .get('/', bookController.getBooks)
  .get('/:id_book', bookController.bookDetail)
  .post('/',uploads.single('images'), bookController.insertBook)
  .patch('/:id', bookController.updateBook)
  .delete('/:id_book', bookController.deleteBook)
module.exports = Router;