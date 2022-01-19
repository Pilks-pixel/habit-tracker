require('dotenv').config();

const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const User = require('../models/user');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        await User.create({...req.body, password: hashed})
        res.status(201).json({msg: 'User created'})
    } catch (err) {
        res.status(500).json({err});
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        console.log('user', user)
        if(!user){ throw new Error('No user with this email') }
        const authed = await bcrypt.compare(req.body.password, user.passwordDigest)
        console.log(authed, req.body.password)
        // ginger coment
        // if (!!authed){
        //     const payload = { username: user.username, email: user.email }
        //     const sendToken = (err, token) => {
        //         if(err){ throw new Error('Error in token generation') }
        //         res.status(200).json({
        //             success: true,
        //             token: "Bearer " + token,
        //         });
        //     } 
        //     jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken);
        // } else {
        //     throw new Error('User could not be authenticated')  
        // }
        // ginger add
        if (authed){
            const payload = { username: user.username, email: user.email }
            console.log(payload,process.env.TOKEN_SECRET )
            const token = jwt.sign(payload, process.env.TOKEN_SECRET);
            console.log('token') 
            res.json({authorization: token});
            // jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken); 
        }
        } catch (err) {
        res.status(401).json({ err });
    }
})

module.exports = router