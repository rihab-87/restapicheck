const mongoose = require('mongoose');

var userschema= new mongoose.Schema({

    name:{type:String,required:true},
    age:Number,
    email:String
    })
   const user=mongoose.model('user',userschema)
    module.exports = user