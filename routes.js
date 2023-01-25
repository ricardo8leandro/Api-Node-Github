const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/users', controllers.getUsers)

router.get('/users/:user', controllers.getUser)

router.get('/users/:user/repos', controllers.getUserRepo)

module.exports = router;