const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbStoreUrl = 'mongodb://localhost:27017/Store';
let dbConnection = mongoose.connect(dbStoreUrl);

 module.exports = dbConnection;
