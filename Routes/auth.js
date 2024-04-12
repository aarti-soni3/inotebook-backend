const express = require('express');
// import {User} from '../Models/User';
const User = require('../Models/User');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log(req.body);

    const user = User(req.body);
    user.save();

    res.send(req.body);

    // obj={
    //     a:'this',
    //     number :34,
    // }
    // res.json(obj);
});

module.exports = router;