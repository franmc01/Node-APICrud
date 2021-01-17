const express = require('express');
const Address = require('../database/models/Address');
const  User  = require('../database/models/User');
const  Post  = require('../database/models/Post');
const router = express.Router();

//Listar usuarios
router.get('/', (req, res)=>{
    User.findAll({
        include:[ { model: Address }, { model: Post } ]
    }).then(users=>{
        res.json({
            ok:true,
            users
        })
    });
});


//Obtener un usuario
router.get('/:id', (req, res)=>{
    User.findByPk(req.params.id).then(user=>{
        if (user) {
            res.json({
                ok:true,
                user
            });
        } else {
            res.json({
                ok:false,
                message : "El usuario de existe en la base de datos"
            });
        }
    });
});


//Insertar usuarios
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