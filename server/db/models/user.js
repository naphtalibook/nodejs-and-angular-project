const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    password: String
});

var User = mongoose.model('Users',usersSchema,'users');
module.exports = User


productRouter.post('/user', (req,res)=> {
    let newUser = new usersDB({
        name: req.body.name,
        password: req.body.password
    });
    newUser.save((err,id)=>{
        if(err) console.log(err)
        res.send(newUser)
    });
});