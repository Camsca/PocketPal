const express = require('express');
const router = express.Router();
const fs = require('fs');   

router.get('/notes', (req, res) => {
    console.log('GET request for notes');
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

module.exports = router;