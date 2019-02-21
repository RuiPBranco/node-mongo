const validator=require('validator');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique:true,
    validate:{
      validator: validator.isEmail,
      message:'{VALUE} is not valid email'
    }
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required: true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};


UserSchema.methods.generateAuthToken = function() {  
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
  user.tokens=user.tokens.concat({access,token});

  return user.save().then(()=>{
    return token;
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};

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