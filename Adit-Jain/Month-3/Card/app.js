const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

//! Static files..
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//! Set Template Engine to ejs..
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

//! Routes..
const cardRouter = require('./src/routes/card');

app.use('/', cardRouter);

//! Listening on port..
app.listen(port, ()=> {
    console.log(`Listening on port #${port}`);
})