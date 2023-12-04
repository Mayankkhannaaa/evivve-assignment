const express = require('express');
const auth = require('../../middlewares/auth');

const userController = require('../../controllers/user.controller');

const router = express.Router();

router.get('/self', auth(), userController.getSelf);

module.exports = router;
