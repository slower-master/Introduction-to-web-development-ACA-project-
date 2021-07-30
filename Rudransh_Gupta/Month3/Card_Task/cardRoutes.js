const express = require('express');
const cardRouter = express.Router();
const fs = require('fs');

var FileRead = fs.readFileSync('AllCardDataBase.json');
var aboutCard = JSON.parse(FileRead);

cardRouter.get('/', (req, res) => {
    res.render('CardIndex');
})

cardRouter.get('/AllCards', (req, res) => {
    res.render('AllCards', { cards : aboutCard });
})

cardRouter.post('', async (req, res) => {
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

module.exports = cardRouter;