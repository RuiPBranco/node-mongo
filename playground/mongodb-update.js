const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to MongoServ');
	}
	console.log('Connected to MongoServ');
	const db = client.db('TodoApp');


	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c66af70ccacc8352088a568')
	// },{
	// 	$set: {
	// 		completed: false
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((res)=>{
	// 	console.log(res);
	// });

	db.collection('Users').findOneAndUpdate({
			_id: new ObjectID('5c65aaba0cec6f24e84406d4')
		},{
			$set: {
				name: 'Paula'
			},$inc: {
				age:1
			}
		},{
			returnOriginal: false
		}).then((res)=>{
			console.log(res);
	})

	// client.close();
});

