const router = require('express').Router();
const userCtrl = require('../controller/user');


/* Routing for login */
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/allUsers', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getUser)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router