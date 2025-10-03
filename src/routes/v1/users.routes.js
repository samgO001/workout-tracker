const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users.controller');

// GET /api/v1/users
router.get('/', usersController.list);

// GET /api/v1/users/:id
router.get('/:id', usersController.getById);

module.exports = router;
