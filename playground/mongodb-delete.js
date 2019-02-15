// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to MongoServ');
	}
	console.log('Connected to MongoServ');
	const db = client.db('TodoApp');

	// --deleteMany
	// db.collection('Todos').deleteMany({text:'make stuff'}).then((res)=>{
	// 	console.log(res);
	// });

	// --deleteOne (deletes the first found with the criteria)
	// db.collection('Todos').deleteOne({text:'me'}).then((res)=>{
	// 	console.log(res);
	// });

	// --findOneandDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
	// 	console.log(res);
	// });

	// remove duplicates
	// db.collection('Users').deleteMany({name:'Rui'});

	// remove find one and delete by key
	db.collection('Users').findOneAndDelete({
		_id:new ObjectID("5c659e52e5644715d0cd0c39"),
		name:'Andre'
	}).then((res)=>{
		console.log(JSON.stringify(res,undefined,2));
	});

	// --client.close();
});
