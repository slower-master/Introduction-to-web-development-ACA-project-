const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const bcrypt = require("bcryptjs");

require("./db/conn");
const register = require("./models/registeration")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "ejs");
app.set("views", templates_path);

app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/login", (req, res)=>{
    res.render("login");
})
app.get("/register", (req, res)=>{
    res.render("register");
})
app.get("/forget", (req, res)=>{
    res.render("forget");
})

app.post("/register", async(req, res)=>{
    try {
        
        const registerUser = new register({
            email : req.body.email1,
            password : await bcrypt.hash(req.body.password1,10)
        })
        
        const registered = await registerUser.save();
        
        res.status(201).render("index");
        
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/login", async(req, res)=>{
    try {

        const mail = req.body.email11;
        const password = req.body.password11;

        // console.log(`${mail} and pass is ${password}`);

        const useremail = await register.findOne({email:mail});

        // res.send(useremail.password);
        if( await bcrypt.compare(password, useremail.password)){
            res.status(201).send(`Successfully Logged In`);
        }
        else{
            res.send("Email/Password wrong");
        }

        
    } catch (error) {
        res.status(400).send("Invalid Email/Password");
    }
})

app.post("/forget", async(req, res)=>{

    const mail = req.body.email11;
    const useremail = await register.findOne({email:mail});
    const id1 = useremail._id;
    
    const update = async(_id) => {
        try {
            const result = await register.findByIdAndUpdate({_id},{
                $set : {
                    password : await bcrypt.hash(req.body.password11,10)
                }
            },{
                new : true,
                useFindAndModify : false
            });

            res.send("Updated");
        } catch (err) {
            console.log(err);
            res.send("error encountered in changing password");
        }
    }
    update(id1);
})

app.listen(port, ()=>{
    console.log(`Server is running at Port ${port}`);
})