const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description_s: {
        type: String,
        required: true
    },
    description_l: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    storage_count: {
        type: Number,
        required: true
    }
});

const Flower = mongoose.model('Flower', flowerSchema);
module.exports = Flower;