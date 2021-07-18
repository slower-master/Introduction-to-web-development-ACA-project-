const express=require('express');
const poke=express();

poke.listen(3000,()=>{
    console.log('Listening to port 3000..');
});

poke.get('/',function(req,res){
    res.send('Welcome to Pokemon World');
});

poke.get('/pokemon',function(req,res){
    res.send('Type a number (between 1-151) in url to get your pokemon!');
});

poke.get('/pokemon/:id',function(req,res){
    const id= req.params.id;
    const imageLink="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";
    res.send(`<img src=${imageLink}>
    <h3>Pokemon no. ${id}</h3>
    `);
    //res.send(imageLink);
})
