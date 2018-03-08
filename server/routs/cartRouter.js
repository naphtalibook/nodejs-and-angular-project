var express =  require('express');
var cartRouter = express.Router();
var dbConnection = require('../db/dbConnection');
var Cart = require('../db/models/cart');

cartRouter.get('/id/:Id',(req,res) =>{
    Cart.find({cartId: req.params.Id})
        .populate('products')
        .exec( (err, response) => {
        if(err){
            res.send(err).status(409);
            console.log(err);
        } 
       else{
            console.log(response[0]);
            res.send(response);
       } 
    })
});



cartRouter.post('/add',(req, res) =>{
    console.log('add');
    //add to db
    Cart.create('cart',{cartId: 3, products:[req.body.product]}, (err,response) =>{//req.body....
        if(err){console.log(err)}
    });
});





module.exports = cartRouter;