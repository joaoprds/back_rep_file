const Sequelize = require('sequelize');
const configDb = require('../config/database');

const connection = new Sequelize(configDb);

module.exports = connection