const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    quantity: Number, 
    product: String
});

const Cart = mongoose.model('User', cartSchema);

module.exports = Cart;