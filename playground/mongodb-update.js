const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        // console.log(err);
        return console.log('Unable to connect to db server');
    }
    console.log('Connected to db server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        name: 'Sumon'
    }, {
            $set: {
                name: 'Pumon'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // client.close();
});