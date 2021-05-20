const mongoose = require('mongoose');

const tshirtSchema = new mongoose.Schema({
    image: String,
    name: String, 
    price : Number, 
    size : String, 
})

const Tshirt = mongoose.model('Tshirt', tshirtSchema);

module.exports = Tshirt;