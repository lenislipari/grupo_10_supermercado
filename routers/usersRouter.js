const express = require('express');
const router = express.Router();
// const path = require ('path');
const usersController = require ('../controllers/usersController');


router.get('/login', usersController.login);


router.get('/register', usersController.register);
router.post('/register', usersController.newRegister)

module.exports = router;