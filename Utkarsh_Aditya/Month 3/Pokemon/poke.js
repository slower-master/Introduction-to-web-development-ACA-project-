const express = require('express');

const poke = express();

poke.get('/', function(req, res) {
    res.send('Hello Pokemons')
})

poke.get('/Pokemon?', function(req, res) {
    const id = req.query.id
    const photo = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    res.send(`
    <img src="${photo}">
    <h3>This is Pokemon #${id}</h3>
`);
})

poke.get('/Pokemon/:id', function(req, res) {
    const id = req.params.id
    const photo = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    if (id > 0 && id < 152) {
        res.send(`
        <img src="${photo}" height="200px" width="200px">
        <h3>This is Pokemon #${id}</h3>
    `);
    } else res.send('<h2>No Pokemon Found</h2>')
})

poke.listen(3000, function(req, res) {
    console.log('Running...')
});