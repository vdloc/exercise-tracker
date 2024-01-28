const express = require('express');
const apiRouter = require('express').Router();
const usersRouter = require('./user');

apiRouter.use('/', usersRouter);

module.exports = apiRouter;
