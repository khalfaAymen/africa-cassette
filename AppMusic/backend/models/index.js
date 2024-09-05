'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const process = require('process');
const { error } = require('console');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.authenticate()
.then(()=>{
  console.log("database connected !!!")
})
.catch((error)=>{
  console.log(error)
})



db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user") (sequelize ,DataTypes)
db.Track = require("./tracks") (sequelize ,DataTypes)
db.Album = require("./albums") (sequelize ,DataTypes)
db.Auth = require("./auth") (sequelize ,DataTypes)


db.User.hasMany(db.Album, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
db.Album.belongsTo(db.User);



db.Album.hasMany(db.Track, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
db.Track.belongsTo(db.Album);



db.User.hasOne(db.Auth, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
db.Auth.belongsTo(db.User);




// sequelize.sync({alter: true })
// .then(()=>{
//   console.log("table created")
// })
// .catch((error)=>{
//   console.log(error)
// })


module.exports = db;
