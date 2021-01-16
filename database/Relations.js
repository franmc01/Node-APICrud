const User = require('./models/User');
const Post = require('./models/Post');
const Address = require('./models/Address');


//Relacion Uno a uno : Un usuario tiene una direcciónf
User.hasOne(Address); //Añade una clave foranea en Address
Address.belongsTo(User); //Añade un clave userId en Address