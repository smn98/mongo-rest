const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        // console.log(err);
        return console.log('Unable to connect to db server');
    }
    console.log('Connected to db server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndDelete({_id:new ObjectID("5bfd7cb18069803db4a334ef")}).then((result)=>{
        console.log(JSON.stringify(result.value,undefined,2));
    });

    // client.close();
});