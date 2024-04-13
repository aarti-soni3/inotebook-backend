const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { check, validationResult } = require('express-validator');

router.post('/', [
    check('name', "Name can't be empty and length atleast 3 characters").notEmpty().isLength({ min: 3, max: 10 }),
    check('email', "Email is not valid").isEmail(),
    check('password', 'password must be atleast 5 characters').isLength({ min: 8 }),
], (req, res) => {
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
        // return res.send(req.query.user);
    }
    // res.send({ errors: result.array() });
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
        .catch(error => {console.log(error)
            res.json({error : " Enter unique value for email ", message : error.message})});
});

module.exports = router;