const express = require('express')
const app = express()
const path = require('path')
const router = require('./src/routes/api')


// Security middleware require
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')



app.use(express.json())
app.use(express.urlencoded({extended:true}))




// Security middleware implement
app.use(cors())
app.use(hpp())
app.use(mongoSanitize())
app.use(helmet())





// Request rate limit
const limiter = rateLimit({windowMs:15*60*100, max:3000})
app.use(limiter)



// Database librery mongoose require
const mongoose = require('mongoose')

// MongoDb connection
const connectDB = async() => {
    const URL = "mongodb://127.0.0.1:27017/ecommerce"
    await mongoose.connect(URL)
    try{
        console.log("mongoDB is connected with ecommerce")
    }catch(e) {
        console.log(e)
    }
}



// Routing implement
// app.use("/api/v1",router)




// Undefined routing implement
// app.use("*", (req,res) => {
//     res.status(404).json({status:"fail", data:"404 not found"})
// })



// Front end route define
// app.get("*", (req,res) => {
//     res.sendFile(path.resolve(__dirname,'clint','dist','index.html'))
// })






module.exports = {app, connectDB}