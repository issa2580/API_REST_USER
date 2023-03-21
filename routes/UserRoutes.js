const express = require('express');
const UserController = require('../controller')

const router = express.Router();

/* Routing for login */
router.post('/register', UserController.register);