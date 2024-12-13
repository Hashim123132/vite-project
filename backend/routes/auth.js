const express = require('express');
const User = require('../models/User')
const router = express.Router();
const {body, validationResult} = require('express-validator');

//Create a user with POST '/api/auth' 
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min:3 }),
    body('FatherName', 'Enter a valid name').isLength({ min:3 }),
    body('ContactNo', 'ContactNO must be 13 characters long').isNumeric(),
    body('CNIC', 'CNIC must be 13 characters long').isLength({min:13}),
    body('City').isLength({min:3}),
    body('Address').isLength({min:3}),
    body('SelectCourse').isLength({min:5}),
    body('ChooseClassMode').isLength({min:5}),
    body('email', 'Enter a valid Email').isEmail(),
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        FatherName: req.body.FatherName,
        ContactNo: req.body.ContactNo,
        email: req.body.email,
        CNIC: req.body.CNIC,
        ChooseClassMode: req.body.ChooseClassMode,
        SelectCourse: req.body.SelectCourse,
        City: req.body.City,
        Address: req.body.Address,
      }).then(user => res.json(user));
       
})


module.exports = router