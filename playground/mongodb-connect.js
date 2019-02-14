// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var Obj = new ObjectID();
// var user = {name:'rui',age:31};
// var{name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to MongoServ');
	}
	console.log('Connected to MongoServ');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to add',
	// 	completed: false
	// },(err,result)=>{
	// 	if (err){
	// 		return console.log('Fail to add field!', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	// Insert new doc into Users(name,age,location)
	// db.collection('Users').insertOne({
	// 	name:'Andre',
	// 	age:24,
	// 	location:'Corroios'
	// },(err,result)=>{
	// 	if (err){
	// 		return console.log('Fail to add user', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// 	// console.log(result.ops[0]._id.getTimestamp());
	// });


	client.close();
});