const express = require('express');
const form = express();

form.use(express.urlencoded({extended: true}))

form.listen(3000, ()=>{
    console.log("Listening to port 3000 now... put your headphones on");
});

form.get('/', (req,res)=>{
    res.sendFile(__dirname+'/form.html');
})

form.get('/post', (req,res)=>{
    const username= req.body.username;
    const comment= req.body.comment;
    res.send(`Hi,${username}! Your comment was: '${comment}'`);
    console.log(username);
});

form.post('/post', (req,res)=>{
    const username= req.body.username;
    const comment= req.body.comment;
    res.send(`Hi,${username}! Your comment was: '${comment}'`);
    console.log(username);
});
