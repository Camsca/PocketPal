const express = require('express');
const router = express.Router();
const fs = require('fs'); 

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log('DELETE request for note with id: ' + id);
    const data= JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newData = data.filter(note => note.id !== id);
    fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
        res.json(newData);
});

});
module.exports = router;