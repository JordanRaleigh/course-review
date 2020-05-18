const Sequelize = require('sequelize')
const db = require('./database')

const Movies = db.define('movie', {
  name: Sequelize.STRING,
  release: Sequelize.DATE,
  score: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0,
      max: 10,
    },
    defaultValue: 0,
  },
  boxoffice: Sequelize.BIGINT,
  cost: Sequelize.INTEGER,
})

module.exports = Movies
