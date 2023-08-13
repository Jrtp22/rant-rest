//required modules
//require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//controllers
app.use('/places', require('./controllers/places'))

// home page
app.get('/', (req, res) => {
    res.render('Home')
})

//wildcard
app.get('*', (req, res) => {
    res.render('Error404')
})

// start server
//app.listen(process.env.PORT)

