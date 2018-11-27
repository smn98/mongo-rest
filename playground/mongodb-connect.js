const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        // console.log(err);
        return console.log('Unable to connect to db server');
    }
    console.log('Connected to db server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sumona',
    //     age: 20,
    //     location: 'Calcutta'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});