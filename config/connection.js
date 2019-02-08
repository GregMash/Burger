const mysql  = require('mysql');
const dotenv = require('dotenv').config({path: '../.env'});
const keys = require('./keys');

const connection = mysql.createConnection({
    port: keys.mysql.port,
    host: keys.mysql.host,
    user: keys.mysql.user,
    password: keys.mysql.password,
    database: keys.mysql.database
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;