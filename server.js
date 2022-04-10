const express=require('express')
let app= express()
const mongoose=require('mongoose')
require('dotenv').config()

//routes
app.get('/',(req,res)=>{
    res.send('Welcome')
})
//connecting to database
mongoose.connect(
    process.env.DATABASE_COLLECTION,{ useNewUrlParser: true },()=>
    console.log('connected to database')
)
//listening 
app.listen(3000)