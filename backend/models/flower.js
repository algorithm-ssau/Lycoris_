const { Binary } = require('mongodb');
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
    },
    image: {
        // The logic behind the image processing is up to you. 
        // I think you should store it in binary form and then unpack it as you see fit
        type: Object
    }
});

const Flower = mongoose.model('Flower', flowerSchema);
module.exports = Flower;