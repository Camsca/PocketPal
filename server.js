const express = require('express');
const app = express();
const fs = require('fs');
//const api = require('');

const port = 7777;
 
app.listen(port, () => {
    console.log(`Server listening on the port:${port}`);
});