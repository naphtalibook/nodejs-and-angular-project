var express=  require('express');
var loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const dbConection = require('../db/dbConnection');
const User = require('../db/models/user');


loginRouter.post('',(req, res) =>{
    let name = req.body.userName;
    let password = req.body.password;
    isPermited(name,password).then((user)=>{

        if(user != false){ //check if is indata bace
            user = JSON.stringify(user);
            //get key with secret code
            const tokenWithUserClaims = jwt.sign(user, 'very-long-secret');
            res.setHeader("authorization", tokenWithUserClaims);
            // console.log(tokenWithUserClaims)
            res.json(tokenWithUserClaims);
            res.status(200).end();
        }else{
            res.status(401).end();
        }

    });
    
});

function user(_name,_familyName,_email){
    this.Name = _name;
    this.FamilyName = _familyName;
    this.Email = _email;
    
}
function isPermited(name,password){
    return new Promise(function(resolve, reject) {
        User.find({name:name, password:password}, (err, response)=>{
            if(err) return reject(err);
            resolve(response[0]);
        });
    });
} 



module.exports = loginRouter;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5hcGh0YWxpIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1MTg2OTg4MDl9.kfZNjZGlAwyDWIcTJk2TEalfryXJnbuUYbuwJXoAYq0