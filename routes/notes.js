// api route
const notes = require('express').Router();
const { v4: uuid4 } = require('uuid'); // npm pack to give each note a unique id when it's saved
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fs');
// helpers need be created and imported? 
// FOR READ AND APPEND ^


// GET route to read the db.json file and return all saved notes as JSON
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        console.log(data);
        res.json(JSON.parse(data))
    })
});

// POST route to receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
notes.post('/notes', (req, res) => {
    console.log(req.body);
    //create a note body object: title,text, id
    const { title, text, id } = req.body;
   
    if (title && text) {
        const noteBody = {
            title,
            text,
            id: uuid4(),
        };
        readAndAppend(noteBody, './db/db.json')
    }
});

module.exports = notes;
