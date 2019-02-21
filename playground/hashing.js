const {SHA256}=require('crypto-js');

const jwt=require('jsonwebtoken');

var data={
	id:10
};

var token = jwt.sign(data,'123abc');

console.log(token);

var decoded=jwt.verify(token,'123abc');

console.log(decoded);

// var msg= 'Stuff';

// var hash=SHA256(msg).toString();

// console.log(msg);
// console.log(hash);

// var data={
// 	id:4
// };

// var token={
// 	data:data,
// 	hash:SHA256(JSON.stringify(data)+'secret').toString()
// }

// token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data)+'secret').toString();

// var resultHash=SHA256(JSON.stringify(token.data)+'secret').toString();
// if(resultHash===token.hash){
// 	console.log('Data was not modified.');
// }else{
// 	console.log('Data corrupted!!!!');	
// };

