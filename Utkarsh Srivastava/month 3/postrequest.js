const express= require('express');
var bodyParser = require('body-parser')
const server=express();
const port=3000

server.use(
    express.urlencoded({
      extended: true
    })
  )

server.post('/post',function(req,res){
    var name=req.body.name;
    var com=req.body.comment;
    res.send('username:' + name + '<br\>comment:' + com);
})

server.listen(port,function(req,res){
        console.log("Server is listening on port "+port)
});
