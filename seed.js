const sequelize = require('./database/db');
const Post = require('./database/models/Post');
const User = require('./database/models/User');
const Address = require('./database/models/Address');
require('./database/asociations');

// Usuarios
const users = [
    { firstName: "Anton", lastName:"Segovia",   email: "azr@azr.es", age: 18, role: 0 },
    { firstName: "Pepe",  lastName:"Segovia",  email: "pepe@gmail.com", age: 38, role: 1 },
    { firstName: "Lucia", lastName:"Segovia",   email: "lucia@hotmail.com", age: 88, role: 0 },
];

// Direcciones
const addresses = [
    { direccion: "Calle de la vida 2", userId: 1 },
    { direccion: "Debajo del puente s/n", userId: 2 },
    { direccion: "Isla de Tabarca, 5", userId: 3 },
];

// Entradas
const posts = [
    { title: "Foo", description: "Bar 1", userId: 1 },
    { title: "Foo", description: "Bar 2", userId: 1 }, 
    { title: "Title", description: "Bar 3", userId: 1 },
    { title: "Yo que se", description: "Bar 4", userId: 1 }, 
    { title: "Me da igual", description: "Bar 5", userId: 2 }, 
    { title: "Todo", description: "Bar 6", userId: 2 }, 
    { title: "Foo", description: "Bar 7", userId: 3 }, 
];


sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    users.forEach(user => User.create(user));
}).then(() => {
    // Rellenar direcciones
    addresses.forEach(address => Address.create(address));
}).then(() => {
    // Rellenar posts
    posts.forEach(post => Post.create(post));
});