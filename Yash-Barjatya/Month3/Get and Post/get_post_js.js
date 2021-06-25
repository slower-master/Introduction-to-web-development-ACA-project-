const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.listen(3000, () => {
    console.log("listening to port 3000");

})
app.get('/post', function (req, res) {
    const { username, comment } = req.body
    res.send(`the username : ${username}, commented : ${comment}`)
})
app.post('/post', function (req, res) {
    const { username, comment } = req.body
    res.send(`the username : ${username}, commented : ${comment}`)
})
