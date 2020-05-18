const userModels = require('../models/user');
const MiscHelper = require('../helpers/helpers');
const { genSaltSync, compareSync, hashSync} = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const connection = require('../configs/db');
require('dotenv').config();

module.exports = {
    getUser: (req, res) => {
        const search = req.query.search
        console.log(search)
        userModels.getUser(search)
            .then((resultUser) => {
                const result = resultUser
                console.log(result)
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    userDetail: (req, res) => {
        const id_user = req.params.id_user
        userModels.userDetail(id_user)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    register: (req, res) => {
        const {email, fullname, password} = req.body
        const data = {
            email,
            fullname,
            password,
            photo: 'https://www.tethys-scubaclub.ch/WP/wp-content/uploads/2016/01/default-profile-pic.gif',
            status: 0,
            role_id: 0
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModels.register(data)
            .then((result) => {
                const resultId = result;
                result.email = data.email;
                const token = jwt.sign({id: resultId.insertId ,email: resultId.email}, 'library')
                const resultToken = jwt.verify(token, 'library');
                result.token = token;   
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD,
                    }
                });
                const mailOptions = {
                    from: 'muh.joseph27@gmail.com',
                    to: data.email,
                    subject: 'Activation Email',
                    text: 'One step closer!!!, please verify your email!',
                    html: '<p>We thank to you, you are one step closer to our services, Verification is needs to complete your registration, please click<a href="http://localhost:8080/auth?activated=' + token+'">here to continue</a></p>',
                };
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err)
                        res.send('Activation email was fail!')
                    } else {
                        const result = {
                            token: tokenactivate,
                            status: 'succes'
                        };
                        MiscHelper.response(res,resultId,200)
                    }
                })
                MiscHelper.response(res, resultId, 200, 'Register Succes Please Check Your Email')
            })
            .catch(err => {
                MiscHelper.response(res, err, 201, 'Register Failed!')
            })
    },
    login: (req, res) => {
        const {email, password} = req.body
        const data = {
            email,
            password
        }
        userModels.login(data.email)
            .then((result) => {
                console.log(result);
                // const newresult = result[0]
                const token = jwt.sign({id: result[0].id_user, email: result[0].email}, 'library');
                const checkPass = compareSync(data.password, result[0].password);
                delete result[0].password;
                if (checkPass === false) {
                    MiscHelper.response(res, null, 202, 'Wrong Password!');
                } else {
                    return res.json({
                    success: 1,
                    message: 'Login Success',
                    result: result[0],
                    token: token,
                    })
                }
            })
            .catch(err => {
                MiscHelper.response(res, err, 203, 'No Match email!');
            })
    },
    insertUser: (req, res) => {
        const { card_number, email, fullname, password, phone, job, address, photo, status } = req.body
        const data = {
            card_number,
            email,
            fullname,
            password,
            phone,
            job,
            address,
            photo,
            status,
            created_at: new Date(),
            updated_at: new Date()
        }
        userModels.insertUser(data)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updateUser: (req, res) => {
        const idUser = req.params.id_user
        const {fullname, email, password, phone} = req.body
        const data = {
            email,
            fullname,
            password,
            phone
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.updateUser(idUser, data)
            .then((result) => {
                MiscHelper.response(res, result, 200)
            })
            .catch(err => {
                MiscHelper.response(res, result, 400)
            })
    },
    deleteUser: (req, res) => {
        const idUser = req.params.id_user
        userModel.deleteUser(idUser)
            .then((result) => {
                if(result.length <= 0) {
                    MiscHelper.response(res, {}, 400, 'User Not Found')
                } else {
                    userModel.deleteUser(idUser)
                    .then((result) => {
                        MiscHelper.response(res, result, 200, 'Deleteing Success!')
                    })
                }   
            })
            .catch(err => {
                MiscHelper.response(res, result, 400, 'User Not Found');
            })
    },
    activation: (req, res) => {
        const reqtoken = req.query.activated;
        const verify = jwt.verify(reqtoken, process.env.SECRET_KEY);
        console.log(verify);
        const status = {
            status: 1,
        }
        connection.query(`UPDATE user SET status = ${status.status} WHERE id_user = ${verify.id}`, (err, result) => {
            if(err){
                MiscHelper.response(res, err, 202, 'Failed Activation');
            }
                MiscHelper.response(res, result, 200, 'Success Activation');
        })
    },
}