const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// find({completed: false})
	// db.collection('Todos').find({
	// 	_id: new ObjectID("5ae4b40fad81e496b9f0637f")
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Mongo'}).toArray().then((docs)=> {
		console.log(JSON.stringify(docs, undefined, 2));
	});

	db.collection('Users').find({name: 'Mongo'}).count().then((count) => {
		console.log(`Mongo Count : ${count}`);
	});
	db.close();
});