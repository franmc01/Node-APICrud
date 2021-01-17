//Importaciones
const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');

//Settings
const PORT = process.env.PORT || 3000;

//Middlewares
//Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas
app.get('/', function(req, res){
    res.json('Hola Mundo')
});

app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/address', require('./routes/address.routes'));


//Arrancamos el servidor
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