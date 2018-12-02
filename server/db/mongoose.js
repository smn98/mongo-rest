var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }).then(()=>{
    console.log('connected to database');
},()=>{
    console.log("could not connect to db");
});

module.exports = { mongoose };