const express = require('express');
const router = express.Router();
const fs = require('fs');   

router.post('/notes', (req, res) => {
    console.log('POST request for notes');
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4()
        };
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            console.log('Note saved');
            res.json(notes);
        });
    });
});
 
module.exports = router;