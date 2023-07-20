//required modules
require('dotenv').config()
const express = require('express')
const app = express()
//controllers
app.use('/places', require('./controllers/places'))
// home page
app.get('/', (req, res) => {
    res.send('Hello world!')
})
//wildcard
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// start server
app.listen(process.env.PORT)
