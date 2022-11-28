var mysql = require('mysql');
const DbConnect = require('./DbConnect');

const mapping = {
    execute: (myQuery) => {
        return new Promise((resolve, reject) => {
            connection = mysql.createConnection(DbConnect);
            connection.query(myQuery, function (error, results) {
                if (error) {
                    console.log('!!Error in Mapping:', error);
                    reject(error);
                }
                resolve(results)
            });
            connection.end();
        })
    }
}

module.exports = mapping
