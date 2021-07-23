const express = require('express');
const cardRouter = express.Router();
const fs = require('fs');
const assert = require('assert');
const axios = require('axios');

var b = fs.readFileSync('cardDetails.json');
var allInfo = JSON.parse(b);
// console.log(allInfo);

cardRouter.get('/', async(req,res) => {
    res.render('mainCard');
    console.log('User now on main page..');
})
cardRouter.get('/thanks', (req,res) => {
    res.render('thanks');
    console.log('User redirected to thanks page..');
})

cardRouter.get('/CardDetails', (req,res,next) => {
    res.render('showCard', { items: allInfo });
    console.log('User now viewing all submissions..');
})

cardRouter.post('', async(req,res) => {
    const user = req.body;
    console.log(user);

    allInfo.push(user);
    var pushData = JSON.stringify(allInfo, null, 2);
    fs.writeFile('cardDetails.json', pushData, () => {
        console.log('Database updated successfully');
    })

    res.redirect('/thanks');
})

module.exports = cardRouter;