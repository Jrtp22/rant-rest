const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    //console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'https://images.unsplash.com/photo-1571244112823-db09c790e924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    }
    if (!req.body.city) {
        req.body.city = 'Gotham City'
    }
    if (!req.body.state) {
        req.body.state = 'Gotham'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})


module.exports = router
