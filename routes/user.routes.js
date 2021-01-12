const express = require('express');
const  User  = require('../database/models/User');
const router = express.Router();

//All
router.get('/', (req, res)=>{
    User.findAll().then(users=>{
        res.json({
            ok:true,
            users
        })
    });
});


//Insert
router.post('/', (req, res)=>{
    User.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role
    }).then(user=>{
        res.json({
            ok: true,
            user
        })
    }).catch(error=>{
        res.json(error.message)
    });
}); 






module.exports = router;