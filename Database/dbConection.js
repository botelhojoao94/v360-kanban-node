require('dotenv').config()
const mysql = require('mysql');

// Connection manager
const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
    port: process.env.DB_PORT
});

module.exports = conexao;