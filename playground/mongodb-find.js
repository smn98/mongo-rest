const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('Connected to db server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bfd7cb18069803db4a334ef')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('Unable to fetch todos',err);
    // })

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos, ', count);
    },(err) => {
        console.log('Unable to fetch todos',err);
    });
    
    client.close();
});