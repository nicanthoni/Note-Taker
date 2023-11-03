const notes = require('express').Router();
const { v4: uuid4 } = require('uuid'); // npm pack to give each note a unique id when it's saved
const { readFromFile, readAndAppend } = require('../helpers/fs');
// helpers need be created and imported? 
// FOR READ AND APPEND ^


// GET route to read the db.json file and return all saved notes as JSON
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});


// POST route to receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
// Need to find a way to give each note a unique id when it's saved (hint to ook into npm packages)
notes.post('/', (req, res) => {
// code here
});

module.exports = notes;