const express = require('express');
const app = express();
const fs = require('fs');
const uuid = require('uuid');

app.use(express.json()); // Middleware for parsing JSON requests

const port = process.env.PORT || 7777;
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});
