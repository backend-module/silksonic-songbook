const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')


const Song = sequelize.define("songs", {
  title: Sequelize.STRING,
  artist: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  image: Sequelize.STRING
})

module.exports = {
  db: sequelize,
  Song
};