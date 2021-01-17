const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');
const User = require('../database/models/User');

//All -> /api/posts
router.get('/', (req, res)=>{
    Post.findAll({
        include: {
            model: User
        }
    }).then(posts=>{
        res.json({
            ok: true,
            posts,
        });
    })
});

//Create -> /api/posts
router.post('/', (req, res)=>{
    const idUser = req.body.userId;
    if(idUser === User.findByPk(User.userId)){
        console.log("existe");
    }
   Post.create({
        title: req.body.title,
        description:req.body.description
   }).then(post=>{
        res.json({
            ok: true,
            post
        });
   });
});


//Read -> /api/posts/:id
router.get('/:id', (req, res)=>{
    Post.findByPk(req.params.id).then(post=>{
        res.json({
            ok: true,
            post
        });
    });
});


//Update -> /api/posts/:id
router.put('/:id', (req, res)=>{
    Post.update({
        title: req.body.title,
        description: req.body.description,
    },{
        where:{
            id: req.params.id
        }
    }).then(result=>{
        res.json({
            ok:true,
            message: "Post actualizado correctamente",
            // result
        });
    });
});


//Delete -> /api/posts/:id
router.delete('/:id', (req, res)=>[
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(()=>{
        res.json({
            ok: true,
            message: "Post eliminado correctamente"
        })
    })
]);

module.exports = router;