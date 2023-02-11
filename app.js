const express =  require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log("connected...")
})

const userRouter = require('./CrudOperation/Routes/users')
app.use('/users',userRouter)

app.listen(8003, ()=>{
    console.log("Server Started")
})