const express = require('express');
const api = express();
const PORT = 3000;

api.use(express.urlencoded({extended:false}));

api.listen(`${PORT}`, ()=> console.log(`Listening at ${PORT}`));

// let var1 = document.getElementById('get');
// let var2 = document.getElementById('post');
// var1.style.display= 'none';
// var2.style.display= 'none';

api.get('/post', (req, res) => {
    const Username = req.body.Username;
    const Comment = req.body.Comment;
    res.send(`Your Username is: ${Username}\n Your Comment is: ${Comment}`);
});

api.post('/post', (req, res) => {
    const Username = req.body.Username;
    const Comment = req.body.Comment
    res.send(`Your Username is: ${Username}\n Your Comment is: ${Comment}`);
}); 