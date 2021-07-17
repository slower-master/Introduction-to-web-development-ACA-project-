const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extended:true }));

app.listen(PORT, () => {
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/pokemon', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pokemon/:id', (req, res) => {
    var num = req.params.id;
    const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + num + ".png";
    res.send(`
        <img src="${image}" height="300px">
    `);
})