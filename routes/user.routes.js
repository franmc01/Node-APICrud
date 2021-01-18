const express = require('express');
const Address = require('../database/models/Address');
const  User  = require('../database/models/User');
const  Post  = require('../database/models/Post');
const router = express.Router();

//Listar usuarios /api/users/
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


//Obtener un usuario /api/users/:id
router.get('/:id', (req, res)=>{
    User.findByPk().then(user=>{
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


//Insertar usuarios /api/users/
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

//Update -> /api/users/:id
router.put('/:id', (req, res)=>{
    User.update({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role
    },{
        where:{
            id: req.params.id
        }
    }).then(result=>{
        res.json({
            ok:true,
            message: "User actualizado correctamente",
        });
    });
});


router.delete('/:id', (req, res)=>{
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(()=>{
        res.json({
            ok: true,
            message: "User eliminado correctamente"
        })
    })
});



module.exports = router;