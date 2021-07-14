const express = require('express');
const app = express();
const path = require('path');
const serverNumber = 3000;

app.use(express.urlencoded({ extended:true }));

app.listen(serverNumber, () => {
    console.log(`Listening on port #${serverNumber}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log('User now on main page..');
});

app.get('/pokemon/:id', (req, res) => {
    var pokemonNumber = req.params.id;
    const photoLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonNumber + ".png";
    res.send(`
        <img src="${photoLink}">
        <h1>This is Pokemon #${pokemonNumber}</h1>
    `);
    console.log(`User now viewing Pokemon #${pokemonNumber}`);
});