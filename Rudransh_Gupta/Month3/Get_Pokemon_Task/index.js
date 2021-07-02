const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

app.get('/Pokemon/:id', (req, res) => {
    var number = req.params.id;
    const PokémonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png";
    res.send(`<div style= "background-color: #aff6cf;
                           background-image: linear-gradient(315deg, #aff6cf 0%, #9f98e8 74%);
                           box-shadow: 10px 10px grey;border-radius: 20px;position:absolute;left: 700px;top: 225px;">
              <h2 style="font-family:cursive; font-size:25px; text-align:center;">Pokemon ${number}</h2>
              <img src="${PokémonImg}" height="200px" width="200px">
              </div>`);
});