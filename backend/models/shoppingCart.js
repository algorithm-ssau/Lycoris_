const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    flowers: [{
        flower: ObjectId,
        count: Number
    }]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = ShoppingCart;