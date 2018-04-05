'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../../db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNul: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNul: false
    }
  })
}
