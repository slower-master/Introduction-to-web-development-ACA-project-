const express= require('express');

const server=express();
const port=3000

server.get('/post',function(req,res){
    const name =req.query.name
    const com=req.query.comment
    res.send('Username:'+name+"<br/>Comment:"+com)
})
server.listen(port,function(req,res){
        console.log("Server is listening on port "+port)
});
