const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/image', express.static(__dirname + 'public/image'));

app.set('views', './views');
app.set('view engine', 'ejs');

const cardRouter = require('./cardRoutes');

app.use('/', cardRouter);

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})