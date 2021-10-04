const express = require('express');
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const LocalStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');

mongoose.connect("mongodb://localhost/auth_demo");

app.use(require("express-session")({
    secret: "Any normal Word",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, User.authenticate()));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded(
    { extended: true }
))
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
    res.render("home");
})

app.get("/final", isLoggedIn, (req, res) => {
    res.render("final");
})
//Auth Routes
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/forgot", (req, res) => {
    res.render("forgot");
})

app.post("/forgot", async (req, res) => {

    const id = useremail._id;
    const mail = req.body.email;
    const useremail = await User.findOne({ email: mail });

    const update = (_id) => {
        try {
            const result = User.findByIdAndUpdate({ _id }, {
                $set: {
                    password: bcryptjs.hash(req.body.newpassword, 10)
                }
            });
            res.send(`<script>alert("Password updated");</script>`);
        } catch (err) {
            console.log(err);
            res.send(`<script>alert("Error");</script>`);
        }
    }
    update(id);
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/final",
    failureRedirect: "/login"
}), function (req, res) {
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {

    User.register(new User({
        username: req.body.email,
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.send(`<script>alert("A user with the given email is already registered");</script>`);
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/login");
        })
    })
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Running at Port 3000");
    }

});

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match user
            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false);
                }
                bcryptjs.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};