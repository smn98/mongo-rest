const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/user');

var id = '5bffe339809df322488e01c9';

User.findById(id).then((user) => {
    if (!user) {
        console.log('Id not found');
    }
    console.log('User by Id', user);
    // mongoose.disconnect();
}).catch((e) => console.log('error'));
