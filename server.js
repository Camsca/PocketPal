const express = require('express');
const app = express();
//const api = require('');

const port = 3001;
 
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});