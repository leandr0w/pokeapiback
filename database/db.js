const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOSTNAME,
    username: 'postgres',
    password: 'akg221',
    database: 'pokeapi',
    logging: false
})

module.exports = { db }