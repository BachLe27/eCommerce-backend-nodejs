'use strict';

const express = require('express');
const accessControllers = require('../../controllers/access.controllers');
const { asyncHandler } = require('../../auth/checkAuth');
const router = express.Router();

router.post('/shop/signup', asyncHandler(accessControllers.signUp));
router.post('/shop/login', asyncHandler(accessControllers.login));


module.exports = router;