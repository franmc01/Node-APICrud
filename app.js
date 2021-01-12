const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User')

//Settings
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    // User.create({
    //     firstName: "Francisco",
    //     lastName: "Marin"
    // }).then(user=>{
    //     res.json(user);
    // })
    User.findAll().then(users=>{
        res.json(users)
    });
})

app.listen(3000, function(){
    console.log(`La aplicación ha arrancado en http://localhost:${PORT}`);

    //Conexión a la base de datos
    //Force:false DROP TABLES
    sequelize.sync({force:false}).then(()=>{
        console.log('Conexión exitosa a la base de datos');
    }).catch(error=>{
        console.error('Error de conexión', error);
    })
});