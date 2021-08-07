const express = require('express');

const app = express();
const port = 2000;

//! Static files..
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! Set Template Engine to ejs..
app.set('views', './src/views');
app.set('view engine', 'ejs');

//! Routes..
const loginRouter = require('./src/routes/mainBackend');

app.use('/', loginRouter);

//! Listening on port..
app.listen(port, () => {
    console.log(`Listening on port #${port}..`);
})