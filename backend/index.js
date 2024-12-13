const express = require('express');
const connectToMongo = require('./db');
connectToMongo();
const app = express()
const port = 5000
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}` )
})