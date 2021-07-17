
const express = require('express')
const app = express()
app.get('/Pokemon/:i', function (req, res) {
    const i = req.params.i;

    var img_link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + ".png";
    var alt_text = 'Pokemon #' + i;
    var heading;
    if (0 < i && i < 899) {
        heading = "Meet Pokemon number #" + i + " !!";
    }
    else
        heading = "Pokemon #" + i + " doesn't exists!!"

    res.send(`<img src="${img_link}" alt ="${alt_text}" width="250px" height="250px"  style=" margin-left:42% ">
    <h1 style ="text-align:center"> ${heading} </h1>`)
})
app.listen(3000, function (req, res) {
    console.log("Listening to port 3000...")
})