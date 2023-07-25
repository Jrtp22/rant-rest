//required modules
require('dotenv').config()
const express = require('express')
const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

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
app.listen(process.env.PORT)
