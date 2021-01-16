const express = require('express');
const router = express.Router();
const Address = require('../database/models/Address');
const User = require('../database/models/User');

router.get('/', (req, res)=>{
    Address.findAll({
        include: {
            model: User
        },
        attributes:['id', 'direccion']
    }).then(addresses =>{
        res.json({
            ok:true,
            addresses
        });
    });
});


module.exports = router;