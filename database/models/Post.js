const  { Model,DataTypes } = require('sequelize');
const sequelize = require('../db');

class Post extends Model{}
Post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT
},{
    sequelize,
    modelName: "posts"
});

module.exports = Post;