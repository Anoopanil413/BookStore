const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  link:{
    type:String,
    trim:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
