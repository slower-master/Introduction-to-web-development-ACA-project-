const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.listen(3000, () => {
    console.log('Listening on port 3000..');
});

app.get('/post', (req, res) => {
    const userName = req.body.Username;
    const comment = req.body.Comment;
    res.send(`Username: ${userName} Comment: ${comment}`);
});

app.post('/post', (req, res) => {
    const userName = req.body.Username;
    const comment = req.body.Comment;
    res.send(`Username: ${userName} Comment: ${comment}`);
}); 