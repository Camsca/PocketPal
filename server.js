const express = require('express');
const app = express();
const uuid = require('uuid');
const getNotes = require('./routes/getNotes');
const saveNote = require('./routes/saveNote');
const deleteNote = require('./routes/deleteNote');

app.use(express.json()); // Middleware for parsing JSON requests
 //middleware for serving HTML files

app.use(express.static('public'));
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});
 //Routes modules for API routes
 app.use('/api', getNotes);
 
 app.use('/api', saveNote);
 app.use('/api', deleteNote);


const port = process.env.PORT || 7777;
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});