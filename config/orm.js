const connection = require('./connection');

function printQuestionMarks(num) {
    const arr = [];
    for (let i= 0; i < num; i++) {
        arr.push('?');        
    }
    return arr.toString();
};

function objectToSql(object) {
    const arr = [];
    for (const key in object) {
        const value = object[key];
        if(Object.hasOwnProperty.call(object, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`)
        }
    }
    return arr.toString();
};

const orm = {
    all: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    create: (table, cols, vals, cb) => {
        const queryString = `Insert Into ${table} (${cols.toString}) VALUES (${printQuestionMarks(vals.length)})`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    update: (table, objColVals, condition, cb) => {
        const queryString = `UPDATE ${table} SET ${objectToSql(objColVals)} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    delete: (table, condition, cb) => {
        const queryString = `DELETE FROM ${table} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;