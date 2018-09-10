const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:  {
    type: String,
    required:true
  },
  vendor:  {
    type: String,
    required:true
  },
  releaseYear:  {
    type: String,
    required:true
  },
  price:  {
    type: Number,
    required:true
  },
  iamge:  {
    type: String
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
