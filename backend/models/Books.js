const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    copies: Number,
    photo: String

})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book;
