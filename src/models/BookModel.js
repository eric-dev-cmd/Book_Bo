const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: String,
    title: String,
    author: String,
    numberOfPages: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model('Book', Book, 'books');