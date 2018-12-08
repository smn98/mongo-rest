const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/user');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5c0bfd29aec06b1fb8525d70').then((doc) => {
    console.log(doc);
});