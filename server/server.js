const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { connect } = require('mongoose')
const dotenv = require("dotenv")

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

app.get('/', (req, res) => {
    res.json('Hello Amazon clone')
});

app.post('/', (req, res) => {
    console.log(req.body)
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Port Running')
    }
})