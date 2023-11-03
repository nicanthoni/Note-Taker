const express = require('express');
const path = require('path');
const api = require('./Develop/routes/index');

// Need to create a custom middleware file/folder, require it above as a const, and app.use(the middleware)?

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use('/api', api);

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for the notes page
app.get('/notes', (res, req) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to home page/index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);


// done? middleware needed?