
const express = require('express')
const app = express();

app.get('/Pokemon/:id', (req, res) => {
    const i = req.params.id;
    var text = 'Meet Pokemon No. ' + i;
    var text1 = 'Sorry, Pokemon not found!'
    var imglink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + ".png";
    var alt = 'Pokemon number' + i + 'image';
    if (i > 0 && i < 152) {
        res.send(`<h1 style="text-align:center"><img src="${imglink}" alt="${alt}" height="50%" width="30%"><br>${text}</h1>`)
    } else {
        res.send(`<h1 style="text-align:center">${text1} </h1>`)
    }
})
app.listen(3000, () => {
    console.log('server started')
})
