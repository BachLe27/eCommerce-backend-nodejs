'use strict';

const express = require('express');
const accessControllers = require('../../controllers/access.controllers');
const router = express.Router();

router.post('/shop/signup', accessControllers.signUp);

module.exports = router;