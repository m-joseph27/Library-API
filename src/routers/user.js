const express = require('express');
const Route = express.Router();
const userController = require('../controller/user')
const Auth = require('../helpers/auth')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './photo')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

// const upload = multer({ storage: storage })
Route
// .all('/*', Auth.authInfo)
    .get('/', userController.getUser)
    .get('/activation', userController.activation)
    .get('/:id_user', userController.userDetail)
    .post('/', userController.insertUser)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .delete('/:id_user', userController.deleteUser)

module.exports = Route;