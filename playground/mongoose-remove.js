const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
// 	console.log(res);
// });


// Todo.findOneAndRemove({_id:'5c6a90108a778d094838a8c9'}).then((res)=>{
// 	console.log(res);
// });


// Todo.findByIdAndRemove({'5c6a90108a778d094838a8c9'}).then((res)=>{
// 	console.log(res);
// });