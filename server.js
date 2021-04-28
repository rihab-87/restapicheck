const mongoose = require('mongoose');
const express=require('express');
const app=express();
 require('dotenv').config();
  const users=require('./models/User');
 const uri = process.env.MONGO_URI;
 // connect mangoose atlas 
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err) throw err;
    console.log('database is connected')
})
// creat users database
// users.create([
//     {name:"hajer",age:33,email:"hajer@gmail.com"},
//     {name:"bouthayna",age:30,email:"bouthayna@gmail.com"},
//     {name:"bouthayna",age:28,email:"bouthayna2@gmail.com"},
//     {name:"manel",age:27,email:"manel@gmail.com"},
//     {name:"imene",age:27,email:"imene@gmail.com"},
//     {name:"rihab",age:33,email:"rihab@gmail.com"}
    
//     ])
//     .then((data)=>console.log(data))
//      .catch((err)=>console.log(err))

app.use(express.json())
//get all users
app.get('/users',(req,res)=>{
users.find((err,data)=>{
    if (err)throw err
    res.send(data)
})
})

// post new user on database
app.post('/users', function (req, res) {
   const newUser= new users({
     name:req.body.name,
     age:req.body.age,
     email:req.body.email
   })
    newUser.save()
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  })
// update one user by id 
  app.put('/users/:id',(req,res)=>{
    users.findByIdAndUpdate({_id:req.params.id},{age:18},{new:true},(err,data)=>{
        if (err)throw err
        res.json(data)
    })
    })
    // delete user by id
    app.delete('/users/:id',(req,res)=>{
      users.findByIdAndRemove({_id:req.params.id},(err,data)=>{
          if (err)throw err
          res.json(data)
      })
      })

     app.listen(5000,()=>console.log('server is running'))