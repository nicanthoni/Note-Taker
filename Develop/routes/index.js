// "Mastermind mind file" -> maps the different paths
const express = require('express');

// modular router for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;

// done?