const mysql = require('mysql');

let pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'admin123',
    database        : 'fitbit_gamification'
});

function executeQuery(query, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            callback(err, null);
        }

        console.log('connected as id ' + connection.threadId);

        connection.query(query, function (err, rows) {
            connection.release();
            if (err) {
                callback(err, null);
            }

            callback(null, rows);
        });
    });
}

module.exports.executeQuery = executeQuery;