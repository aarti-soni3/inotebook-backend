const connectToMongo  = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello gautam')
})

app.get('/about',(req,res)=>{
    res.send('hello about')
})

app.get('/pricing',(req,res)=>{
    res.send('hello pricing')
})

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`);
})