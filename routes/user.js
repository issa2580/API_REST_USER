const router = require('express').Router();
const userCtrl = require('../controller/user');


/* Routing for login */
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);

module.exports = router