const express = require('express');
const app = express();
const authRouter = require('./Routes/authRouter');

app.use('/auth', authRouter);

module.exports = app;