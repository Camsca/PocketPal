const express = require('express');
const app = express();
const fs = require('fs');
const uuid = require('uuid');

app.use(express.json()); // Middleware for parsing JSON requests

app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});

app.use(express.static('public'));

const port = process.env.PORT || 7777;
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});
