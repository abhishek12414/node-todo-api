// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'andrew', age:25};
// var {name} = user;
// console.log(name); //andrew

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	// db.collection('Todos').insertOne({

	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name:'Mongo',
	// 	age:25,
	// 	Location:'Philadelphia'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	console.log(result.ops);
	// });

	db.close();
});
