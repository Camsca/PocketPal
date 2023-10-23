const express = require('express');
const app = express();
const uuid = require('uuid');
const getNotes = require('./routes/getNotes');

app.use(express.json()); // Middleware for parsing JSON requests
 //middleware for serving HTML files
app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});

app.use(express.static('public'));
 //Routes modules for API routes
 app.use('/api', getNotes);


const port = process.env.PORT || 7777;
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});
