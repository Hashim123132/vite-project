const mongoose = require('mongoose');
mongoURI = 'mongodb://localhost:27017/information'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log('Mongoose connected Sucessfully')

} 
module.exports = connectToMongo;