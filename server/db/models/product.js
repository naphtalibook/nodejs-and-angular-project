const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productID : Number,
    productName : String,
    unitPrice : Number,
    unitsInStock : Number,
    unitsOnOrder : Number,
    category : Number,
    coopon : Boolean
});

const Product = mongoose.model('products', productSchema, 'products');

module.exports = Product;
