const express = require('express');
const path = require("path")    //path module which connect static file like html
const appp = express();
require("./models/alien")   //connection with MONGOOSE datbase 
const { json } = require('express')
const { urlencoded } = require('express')
const Register = require("./routes/rr")

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "./public");
appp.use(express.static(static_path));               //HTML STATIC CONNECTION
appp.set("view engine", "hbs")  ///using view engine
appp.set("views", "./views")
appp.use(express.json())
appp.use(express.urlencoded({ extended: false }))
appp.get('/', (req, res) => {
    res.render("index");
});
appp.get("/register", (req, res) => {
    res.render("index")
})
appp.post("/register", async (req, res) => {
    try {
        const card = req.body.card
        const month = req.body.month
        const year = req.body.year
        const csv = req.body.csv
        if ((month > 0 && month <= 12) && (year >= 2000 && year <= 9999) && (card.length <= 12) && (csv.length === 3)) {
            const carddetails = new Register({
                name: req.body.name,
                cardnum: req.body.card,
                month: req.body.month,
                year: req.body.year,
                csv: req.body.csv
            })
            const registered = await carddetails.save()
            res.status(201).render("index")
        } else {
            res.send("not valid information")
        }


    } catch (err) {
        res.status(400).send(err)
    }
})
appp.listen(port, () => {
    console.log(`server is running at port no ${port}`);


});