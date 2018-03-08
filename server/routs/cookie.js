var express=  require('express');
var cookieRouter = express.Router();
var guid = require('../models/guid');
var keyArray = require('../models/keyArray');

cookieRouter.get('/', (req, res) =>{
    let key = guid.getGuid() 
    keyArray.push(key);
    res.cookie("key", key);
    res.send('kookie init no error');
});
module.exports = cookieRouter;