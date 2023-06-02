
// import express
const express=require('express')

// create server using express
const server=express()

// import cors
const cors=require('cors')
// import logic 
const logic=require('./services/logic')


// use cors in server app..
server.use(cors({
    origin:'http://localhost:4200'
}))

// use express.json()- to parse json content
server.use(express.json())


// setup port for server app

server.listen(3000,()=>{
    console.log('bank app started at port 3000');
})

// BANK SERVER 

// register

server.post('/register',(req,res)=>{
    console.log('inside register api');
   console.log(req.body);

//    call register functon of logic 
logic.register(req.body.firstname,
    req.body.lastname,
    req.body.address,
    req.body.mobile,
    req.body.dob,
    req.body.email,
    req.body.gender,
    req.body.course)
.then((result)=>{

        // responce to client

    res.status(result.statusCode).json(result)

})


})

server.get('/home',(req,res)=>{
    console.log('inside home');
    console.log(req.body);

    logic.getData().then((result)=>{
        res.status(result.statusCode).json(result.result)
        console.log(result);
    })
})