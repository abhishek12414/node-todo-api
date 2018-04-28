const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err)
		return console.log('Unable to connect');

	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Each Lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Each Lunch'}).then((result)=> {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })

	// Excercise
	// db.collection('Users').deleteOne({name: 'Mongo'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5addd94ecfa3680d284c8beb')
	}).then((results)=>{
		console.log(JSON.stringify(results, undefined, 2));
	});

	db.close();
});