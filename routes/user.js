const router = require('express').Router();
const userCtrl = require('../controller/user');


/* Routing for login */
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/allUsers', userCtrl.getAllUsers)
router.get('/user/:id', userCtrl.getUser)

module.exports = router