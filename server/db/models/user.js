const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    familyName: String,
    email: String,
    password: String
});

var User = mongoose.model('Users',usersSchema,'users');
module.exports = User


