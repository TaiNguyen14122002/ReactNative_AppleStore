const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  carouselImages: {
    type: [String],
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  product_createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
