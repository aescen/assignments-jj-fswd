const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  variantName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ProductsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  variantsList: [
    {
      type: VariantSchema,
    },
  ],
});

const ProductsModel = mongoose.model('products', ProductsSchema);

module.exports = ProductsModel;
