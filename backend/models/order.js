const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    flowers: [{
        flower: ObjectId,
        count: Number
    }],
    recipient:{
        type: String,
        required: true
    },
    order_time:{
        type: Date,
        required: true
    },
    order_status:{
        type: Boolean,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;