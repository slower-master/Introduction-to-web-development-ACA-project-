const express = require('express');
const app = express();
// to  read file
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//STATIC files
app.use(express.static('./public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.use(express.static('./public'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express.static('./public'));
app.use('/js_card', express.static(__dirname + 'public/js_card'));

//view engine

app.set('view engine', 'ejs');
app.set('views', './source/views/layout');

//Routes

const cardRouter = require('./source/routes/card_router');
app.use('/', cardRouter);

app.listen(8080, () => {
    console.log("Connected to port 8080");
})