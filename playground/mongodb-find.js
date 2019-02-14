// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to MongoServ');
	}
	console.log('Connected to MongoServ');
	const db = client.db('TodoApp');

	// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c65a54c027e9324e8b1dd14')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos:');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch the collection', err);
	// });

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos: ${count}`);
	// 	// console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch the collection', err);
	// });

	db.collection('Users').find({name:"Rui"}).count().then((count)=>{
		console.log(`Users with Rui found: ${count}`);
		// console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch the collection', err);
	});

	db.collection('Users').find({name:"Rui"}).toArray().then((docs)=>{
		console.log('Users:');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch the collection', err);
	});


	// client.close();
});