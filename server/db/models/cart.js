const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    cartId : Number,
    products: [{
        type: [mongoose.Schema.Types.ObjectId],
         ref: 'products'
    }]
});

var Cart = mongoose.model('cart',cartSchema,'cart');
module.exports = Cart;