const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended:true }));

app.listen(3000, () => {
    console.log('Listening on port #3000..');
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log('User now on main page..')
});

app.get('/post', (req, res) => {
    const userName = req.body.userNameGet;
    const comment = req.body.commentGet;
    res.send(`${userName}'s Comment: ${comment}`);
    console.log('User has used the \'GET\' option..');
});

app.post('/post', (req, res) => {
    const userName = req.body.userNamePost;
    const comment = req.body.commentPost;
    res.send(`${userName}'s Comment: ${comment}`);
    console.log('User has used the \'POST\' option..');
});