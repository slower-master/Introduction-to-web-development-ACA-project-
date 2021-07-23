const express = require('express');
const form = express();
form.use(express.urlencoded({ extended: true }))

form.listen(3000, function(req, res) {
    console.log('Running..')
});

form.get('/post', (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    res.send(`the user : ${username} commented : ${comment}`);
})

form.post('/post', (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    res.send(`the user : ${username} commented : ${comment}`);
})