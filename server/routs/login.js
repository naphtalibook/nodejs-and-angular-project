var express=  require('express');
var loginRouter = express.Router();
const jwt = require("jsonwebtoken");


loginRouter.post('',(req, res) =>{
    let name = req.body.userName;
    let password = req.body.password;
    let permition = isPermited(name,password);
    if(permition != false){ //check if is indata bace
        permition = JSON.stringify(permition)
        //get key with secret code
        const tokenWithUserClaims = jwt.sign(permition, 'very-long-secret');
        res.setHeader("authorization", tokenWithUserClaims);
        // console.log(tokenWithUserClaims)
        res.json(tokenWithUserClaims);
        res.status(200).end();
    }else{
        res.status(401).end();
    }
});

function user(_name,_password,_role){
    this.Name = _name;
    this.Password = _password;
    this.Role = _role;
}
function isPermited(name,password){
    if(name === 'naphtali' && password === '123456'){
        return new user(name, password,'admin');
    }else if(name === 'gal' && password === '123'){
        return new user(name, password, 'user');
    }else{
        return false;
    }
}


module.exports = loginRouter;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5hcGh0YWxpIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1MTg2OTg4MDl9.kfZNjZGlAwyDWIcTJk2TEalfryXJnbuUYbuwJXoAYq0