var mongoose=require('mongoose');

var User=mongoose.model('User',{
	name:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	email:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	}
});

module.exports={User}

// var newUser=new User({
// 	name:'  Rui    ',
// 	email:'rui.p@gmail.com    '
// });

// var secondUser=new User({
// 	name:'  Me    ',
// 	email:'rpg@gmail.com    '
// });

// newUser.save().then((doc)=>{
// 	console.log(JSON.stringify(doc,undefined,2));
// },(e)=> {
// 	console.log('Unable to save',e);
// });

// secondUser.save().then((doc)=>{
// 	console.log(JSON.stringify(doc,undefined,2));
// },(e)=> {
// 	console.log('Unable to save',e);
// });