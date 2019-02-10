const mysql  = require('mysql');
const keys = require('./keys');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: keys.mysql.host,
        user: keys.mysql.user,
        password: keys.mysql.password,
        database: keys.mysql.database
    });
};


connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;