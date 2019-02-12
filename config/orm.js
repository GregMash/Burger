const connection = require('./connection');

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objectToSql(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        console.log(ob);
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = `${value}`;
            }
            arr.push(`${key}=${value}`)
        }
    }
    return arr.toString();
};

const orm = {
    all: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput};`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    create: (table, cols, vals, cb) => {
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
        console.log(queryString);
        connection.query(queryString, vals, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    update: (table, objColVals, condition, cb) => {
        const queryString = `UPDATE ${table} SET ${objectToSql(objColVals)} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    delete: (table, condition, cb) => {
        const queryString = `DELETE FROM ${table} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
};

module.exports = orm;