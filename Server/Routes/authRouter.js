const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/authController");
const { authMiddleware } = require("../Middlewares/authMiddlewares");

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.post('/validateToken', authMiddleware, AuthController.validateToken);

module.exports = router;

