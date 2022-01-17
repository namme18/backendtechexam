"use strict";
const express = require('express');
const router = express.Router();
const { addMessage } = require('../controllers/user');
const jsonValidator = require('../Middleware/jsonValidator');
router.post('/addmessage', jsonValidator, addMessage);
//can add all user routes here...
module.exports = router;
