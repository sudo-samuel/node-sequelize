const database = require('../config/db.config')

const Sequelize = require('sequelize');

// SEQUELIZE INSTANCE
const sequelize = new Sequelize(
    database.DATABASE,
    database.USER,
    database.PASSWORD,
    {
        host: database.HOST,
        dialect: database.DIALECT
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.book = require('./book.model')(sequelize, Sequelize)

module.exports = db;