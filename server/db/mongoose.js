let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log('connected to database');
}, () => {
    console.log("could not connect to db");
});

module.exports = { mongoose };