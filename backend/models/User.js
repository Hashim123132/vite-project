const mongoose = require('mongoose')
const { Schema } = mongoose;
 const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    FatherName:{
        type:String,
        required:false
    },
    ContactNo:{
       type: Number,
        required:false
    },
    email:{
       type: String,
        required:false
    },
    CNIC:{
        type:String,
        required:false
    },
    ChooseClassMode:{
        type:String,
        required:false
    },
    SelectCourse:{
        type:String,
        required:false
    },
    City:{
        type: String,
        required:false
    },
    Address:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default: Date.now
    }
 })
 module.exports= mongoose.model('user', UserSchema);