const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var path = require('path');
const nodemailer = require("nodemailer");

const loginRouter = express.Router();
const JWT_SECRET = 'type_whatever_you_want_here'                //! NOT TO BE SHARED AT ANY COST!!
var emailMessage = 'You are getting this mail because you used the forgot password method. Your new randomly generated password is: '

//! Connecting to database..
mongoose.connect('mongodb://localhost:27017/loginTrial101', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected Successfully!!');
}).catch((err) => {
    console.log('Oh no! Error:');
    console.log(err);
})

//! For sending mails..
var transporter = nodemailer.createTransport({
    service: 'gmail',                           //! Change this if not using gmail account..
    auth: {
        user: '',                               //! Account from which mail is to be sent..
        pass: ''                                //! Password of the same account..
    }
});
var mailOptions = {
    from: '',                                   //! Account from which mail is to be sent..
    to: '',
    subject: 'Password Reset Email',
    text: ''
};

//! Function to generate a random password of specified length..
function generatePassword(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}

//! Middleware..
loginRouter.use(express.json());

//! Homepage..
loginRouter.get('/', async(req,res) => {
    res.render('register');
    console.log('User now on Registration page..');
})
loginRouter.get('/login', async(req,res) => {
    res.render('login');
    console.log('User now on Login page..');
})
loginRouter.get('/forgot', async(req,res) => {
    res.render('forgot');
    console.log('User now on Forgot Password page..');
})
loginRouter.get('/changePassword', async(req,res) => {
    res.render('changePassword');
    console.log('User now on Change Password page..');
})
loginRouter.get('/profile', async(req,res) => {
    res.render('home');
    console.log('User now on Profile page..');
})
loginRouter.get('/error', async(req,res) => {
    res.render('error');
    console.log('User now on Error page..');
})

//! Registration Page..
loginRouter.post('/api/register', async(req,res) => {
    console.log(req.body);
    const { firstname, lastname, email, username, password: plainTextPassword } = req.body;
    
    if (!firstname || typeof firstname !== 'string'){
        console.log('User entered invalid First Name..');
        return res.json({ status: 'error', error: 'Invalid First Name' });
    }
    if (!email || typeof email !== 'string'){
        console.log('User entered invalid E-mail Address..');
        return res.json({ status: 'error', error: 'Invalid E-mail Address' });
    }
    if (!username || typeof username !== 'string'){
        console.log('User entered invalid username..');
        return res.json({ status: 'error', error: 'Invalid username' });
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string'){
        console.log('User entered invalid password');
        return res.json({ status: 'error', error: 'Invalid Password!' });
    }
    if (plainTextPassword.length < 8){
        console.log('User entered too short password')
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atleast 8 characters long.'
        })
    }
    console.log(req.body);

    //! Hashing the password for security..

    const password = await bcrypt.hash(plainTextPassword, 10);   //! 10 means 10 times run bcrypt on this password..
    try {
        const response = await User.create({
            firstname,
            lastname,
            email,
            username,
            password
        })
        console.log(`User Created Successfully!!: ${response}`);
    } catch (error){
        // console.log(JSON.stringify(error));
        if (error.code === 11000){
            //! Duplicate Username..
            return res.json({ status: 'error', error: 'Username/Email already in use.' });
        }
        throw error;

        // return res.json({ status: 'error' });
    }

    res.json({ status: 'ok' });
})

//! Login(-ed) Page..
loginRouter.post('/api/login', async(req,res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).lean();

    if (!user){
        return res.json({ status: 'error', error: 'Invalid Email/Password' });
    }

    if (await bcrypt.compare(password, user.password)){
        //! The username-password combination is correct..

        const token = jwt.sign({
            id: user._id,
            username: user.username
        },
            JWT_SECRET
        );

        res.json({ status: 'ok', data: token });
    }

    res.json({ status: 'error', error: 'Invalid Email/Password' });
})

//! Now, to change password..
loginRouter.post('/api/changePassword', async(req,res) => {
    const { token, newPassword: plainTextPassword } = req.body;

    if (!plainTextPassword || typeof plainTextPassword !== 'string'){
        console.log('User entered invalid password');
        return res.json({ status: 'error', error: 'Invalid Password!' });
    }
    if (plainTextPassword.length < 8){
        console.log('User entered too short password')
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atleast 8 characters long.'
        })
    }

    try{
        const user = jwt.verify(token, JWT_SECRET);
        console.log('JWT Decoded: ', user);

        const _id = user.id;
        const password = await bcrypt.hash(plainTextPassword, 10);
        await User.updateOne({ _id }, {
            $set: { password }
        })

        res.json({ status: 'ok' });
        // res.redirect('/profile');
    } catch (error){
        console.log(error);
        res.json({ status: 'error', error: ';))' });
    }
})

//! Now personalized profile pages..
loginRouter.post('/api/checkValidity', async(req,res) => {
    const { token } = req.body;

    try{
        const user = jwt.verify(token, JWT_SECRET);
        console.log('JWT Decoded: ', user);

        const username = user.username;
        const person = await User.findOne({ username }).lean();

        res.json({ status: 'ok', user: person });
    } catch (error){
        // console.log('No login detected..');
        return res.redirect('/error');
        // res.json({ status: 'error', error: 'You are being redirected..' })
    }
})

loginRouter.post('/api/forgotPassword', async(req,res) => {
    const { email } = req.body;
    console.log(email);
    try{
        var person = await User.findOne({ email: email }).lean();
        const _id = person.id;
        // console.log(person);
        
        var newPasswordPlain = generatePassword(12);
        var password = await bcrypt.hash(newPasswordPlain, 10);
        await User.updateOne(person, {
            $set: { password }
        })
        
        // console.log(newPasswordPlain);
        mailOptions.text = emailMessage + newPasswordPlain;
        mailOptions.to = person.email;
        transporter.sendMail(mailOptions, (error, info) => {
            if (error){
                res.redirect('/error');
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        res.json({ status: 'ok', email: email });

    } catch(error){
        console.log('Error :(');
        res.json({ status: 'ok', email: email });
    }
})

module.exports = loginRouter;