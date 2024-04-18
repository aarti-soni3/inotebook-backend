const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { check, validationResult } = require('express-validator');

//create user using POST : api/auth/createUser
router.post('/createUser', [
    check('name', "Name can't be empty and length atleast 3 characters").notEmpty().isLength({ min: 3, max: 10 }),
    check('email', "Email is not valid").isEmail(),
    check('password', 'password must be atleast 5 characters').isLength({ min: 8 }),
], async (req, res) => {

    //if having errors, then return bad req & errors
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
        // return res.send(req.query.user);
    }
    // res.send({ errors: result.array() });

    try {
        //check whether user iwth this email exist or not
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "user with this email is exist !" })
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        //.then(user => res.json(user))
        //     .catch(error => {console.log(error)
        //         res.json({error : " Enter unique value for email ", message : error.message})});
        res.json({ user });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

});

module.exports = router;