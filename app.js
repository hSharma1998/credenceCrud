const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MovieDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})


const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

const movieRouter = require('./routes/movies')
app.use(express.json())
app.use('/movies', movieRouter)

app.listen(9000, ()=> {
    console.log('Server started')
})