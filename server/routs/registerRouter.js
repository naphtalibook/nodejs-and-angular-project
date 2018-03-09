var express =  require('express');
var registerRouter = express.Router();
var dbConnection = require('../db/dbConnection');
var User = require('../db/models/user');


registerRouter.post('/', (req,res)=> {

    let newUser = new User({
        name: req.body.Name,
        familyName: req.body.FamilyName,
        email: req.body.Email,
        password: req.body.Password
    });
    newUser.save((err,id)=>{
        if(err) console.log(err)
        console.log(id);
        res.send(newUser);
    });
});



module.exports = registerRouter;