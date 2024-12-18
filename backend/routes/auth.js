const express = require('express');
const User = require('../models/User')
const router = express.Router();
const {body, validationResult} = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

//SENDER 
const transporter = nodemailer.createTransport({
service:'gmail',
auth:{
    user:process.env.Email_User,
    pass: process.env.Email_Password
},

})
const sendNotification = (userName, userFatherName, userContactNo, userEmail, userCNIC, userClassMode, userCourse, userCity, userAddress)=>{


const mailOptions = {
    from: process.env.Email_User,
    to: userEmail,
    subject:'Your Info which we got',
    text:`Hello ${userName},\n\nThank you for your submission! We have received the following information:\n\nName: ${userName}\nFather Name: ${userFatherName}\nContact No: ${userContactNo}\nEmail: ${userEmail}\nCNIC: ${userCNIC}\nChooseClassMode: ${userClassMode}\nSelect Course: ${userCourse}\nCity: ${userCity}\nAddress: ${userAddress}\n NOTE: KEEP IN MIND IF THIS INFO IS NOT CORRECT YOUR FORM WILL BE REJECTED`
};
transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        return console.log(('Email Sent Successfully', info.response));
    }
    else{
        console.log('Email sent:', info.response);
    }
})
}

//Create a user with POST '/api/auth' 
router.post('/createuser',[
  //express validation
    body('name', 'Enter a valid name').isLength({ min:3 }),
    body('FatherName', 'Enter a valid name').isLength({ min:3 }),
    body('ContactNo', 'ContactNO must be 13 characters long').isNumeric(),
    body('CNIC', 'CNIC must be 13 characters long').isLength({min:13}),
    body('City').isLength({min:3}),
    body('Address').isLength({min:3}),
    body('email', 'Enter a valid Email').isEmail(),
], async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //if user exists 
    let user = await User.findOne({email: req.body.email})
    if(user){
      return res.status(409).json({msg:'User with this email or CNIC already exists'})
    }
    user = await User.create({
        name: req.body.name,
        FatherName: req.body.FatherName,
        ContactNo: req.body.ContactNo,
        email: req.body.email,
        CNIC: req.body.CNIC,
        ChooseClassMode: req.body.ChooseClassMode,
        SelectCourse: req.body.SelectCourse,
        City: req.body.City,
        Address: req.body.Address,
      })
      sendNotification(user.name, user.FatherName, user.ContactNo, user.email, user.CNIC, user.ChooseClassMode, user.SelectCourse, user.City, user.Address);
      res.json(user)
       
})


module.exports = router