var express =  require('express');
var productRouter = express.Router();
var dbConnection = require('../db/dbConnection');
var Product = require('../db/models/product');

productRouter.get('/all/:page', (req,res) =>{
    Product.find({}, (err, response)=>{
        if(err){
            res.send(err).status(409);
            console.log(err);
        } 
       else{
            console.log(response)
            res.send(response);
       } 
    }).limit(10).skip((req.params.page -1) * 10);
});

productRouter.get('/search/:text', (req,res) =>{
    var myregex = new RegExp(`.*${req.params.text}.*`,'i');
    Product.find({productName:{$regex : myregex}}, (err, response)=>{
        if(err){
            res.send(err).status(409);
            console.log(err);
        } 
       else{
            console.log(response)
            res.send(response);
       } 
    })
});

productRouter.get('/price', (req,res) =>{
    Product.find({$and: [{unitPrice: {$gte: req.query.min}},{unitPrice: {$lte: req.query.max}}]}, (err, response)=>{
        if(err){
            res.send(err).status(409);
            console.log(err);
        } 
       else{
            res.send(response);
       } 
    });
});
 

productRouter.get('/', (req,res) =>{
    if(req.query.max == undefined && req.query.min == undefined && req.query.searchText == null){
        Product.find({}, (err, response)=>{
            if(err){
                res.send(err).status(409);
                console.log(err);
            } 
           else{
                console.log('sucsses');
                res.send(response);
           } 
        }).limit(10).skip((req.query.page -1) * 10);
    }else{
        let and = [];
        if(req.query.searchText != null){
            var myregex = new RegExp(`.*${req.query.searchText}.*`,'i');
            and.push({productName:{$regex : myregex}});
        }
        if(req.query.min != null && req.query.max != null ){
            and.push({unitPrice: {$gte: req.query.min}},{unitPrice: {$lte: req.query.max}});
        }
        Product.find({$and: and}, (err, response)=>{
            if(err){
                res.send(err).status(409);
                console.log(err);
            } 
           else{
                res.send(response);
           } 
        }).limit(10).skip((req.query.page -1) * 10);
    }
   
});
    
module.exports = productRouter;