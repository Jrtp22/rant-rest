const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://images.unsplash.com/photo-1571244112823-db09c790e924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Gotham City' },
    state: { type: String, default: 'Gotham' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
})



placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model('Place', placeSchema)




/* module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/rest.jpg',
    id: 1
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    id: 2
}] */