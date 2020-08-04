const express = require('express');
const routerLogin = express.Router();
const loginController = require('../controllers/loginController');

routerLogin.get('/', loginController.inicio);


module.exports = routerLogin;