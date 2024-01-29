const express = require('express');
const apiRouter = require('express').Router();
const usersRouter = require('./user');
const exerciseRouter = require('./exercise');
const logRouter = require('./log');

apiRouter.use('/', usersRouter);
apiRouter.use('/', exerciseRouter);
apiRouter.use('/', logRouter);

module.exports = apiRouter;
