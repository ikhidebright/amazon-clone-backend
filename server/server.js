const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { connect } = require('mongoose')
const dotenv = require("dotenv")
const productRoute = require('./routes/product')

dotenv.config()

const app = express()

connect(process.env.database,
{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected db")
    }
})

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', productRoute)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Port Running')
    }
})