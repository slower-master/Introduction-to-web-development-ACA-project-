const express = require('express');
const router = express.Router();
// READING FILE
const fs = require('fs');
var data = fs.readFileSync('credit_card.json');
var card_details = JSON.parse(data);
console.log(card_details);
//ROUTES
router.get('/', async (req, res) => {
    try {
        res.render('card_layout');
    }
    catch (err) {

        res.send(err);
    }
});
router.get('/card', async (req, res) => {
    try {
        res.render('card_added', { cards: card_details });
        console.log("Showing all Credit cards  added ");
    }
    catch (err) {

        res.send(err);
    }
});
router.post('/', async (req, res) => {
    const card_data = req.body;
    console.log(card_data);
    card_details.push(card_data);
    var details = JSON.stringify(card_details, null, 2);
    fs.writeFile('credit_card.json', details, () => {

        console.log("User's card details successfully added to .json file")
    });
    res.send("Bravo!! your card has been successfully added");
})
module.exports = router;