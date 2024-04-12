const connectToMongo  = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());

//available routes

// app.get('/',(req,res)=>{
//     res.send('hello');
// })

app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`);
})