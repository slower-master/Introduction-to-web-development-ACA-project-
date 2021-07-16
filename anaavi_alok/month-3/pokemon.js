const express = require('express');
const pokemon = express();
pokemon.get('/pokemon/:id', function (req, res) {
    var id = req.params.id;
    if ((id >= 1) && (id <= 151)) {
        
        const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        res.send(`<img src="${image}">`)
    }
    else
        res.send('not possible')
})
pokemon.listen(3000, function (req, res) {
    console.log('Running..')
});
