var express = require ('express');

var app = express();

app.set ('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:id', (req, res) => {
    res.render('pokemon', {id: req.params.id});
});

app.listen(3001 ,'localhost');