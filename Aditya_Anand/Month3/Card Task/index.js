const express = require('express');
const path = require('path');
require("./db/databse");

const fs = require('fs');
const app=express()
const port = process.env.PORT || 5000;
// const static_path = path.join(__dirname, "/public");
// const template_path = path.join(__dirname, "/views");

// app.use(express.static(static_path))
// app.set('views', template_path)
// console.log(path.join(__dirname, "./public/css"))
//if main file name is not layout
// app.set('layout', './templates/views/layout')

var FileRead = fs.readFileSync('data.json');
var Carddata = JSON.parse(FileRead);

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/image', express.static(__dirname + 'public/'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('layout')
})

app.post('/add',(req,res)=>{
    res.send('added');
})

app.get('/details',(req,res)=>{
    res.render('details', { cards : Carddata});
})


app.post('', async (req, res) => {
    const user = req.body;
    aboutCard.push(user);
    var pushCard = JSON.stringify(aboutCard, null, 2);
    fs.writeFile('AllCardDataBase.json', pushCard, () => {
        console.log('New Card Added To The Database');
    })
    res.send(`<div style="height:25%; width:20%; text-shadow:1px 1px grey;
                padding:70px 0px 0px 0px; font-family:Verdana,sans-serif; 
                border-radius:15px; box-shadow: 4px 4px black; 
                background-color: #b8c6db;font-size:25px;vertical-align:middle;
                 background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
                text-align:center; margin:auto; position:absolute; top:26%; left:38%;">
                Your Data has<br> been Successfully<br> added to our<br> Database
              </div>`)
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})




// const name_array = [];
// var name_i = 0;
// function add_name(){
//     name_array[name_i] = document.getElementById("name").nodeValue;
//     name_i++;
//     document.getElementById("name").nodeValue = "";
// }

// function display_array(){
//     var display11 = "<hr/>";
//     for(var i = 0; i<name_array.length; i++){
//         display11 += "Name is" + name_array[i] +"<br/>";
//     }
//     document.getElementById("Result").innerHTML = display11;
// }