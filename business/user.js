let mysql = require("../database/mysql");

function login(loginDetails, callback) {
    let query = "SELECT email, password from user WHERE email='" + loginDetails.email + "' AND password='" + loginDetails.password + "'";
    console.log(query);
    mysql.executeQuery(query, function (err, data) {
        if (err){
            callback(err);
        }else {
            if (data.length === 0){
                callback({ 'message': 'No user records found.' });
            } else {
                callback(null);
            }
        }
    });
};


function signup(loginDetails, callback){
    let query = "INSERT INTO user(first_name, last_name, password, email, age, isDeleted) VALUES('" + loginDetails.firstname + "', '" + loginDetails.lastname + "', '" + loginDetails.password + "', '" + loginDetails.email + "', " + loginDetails.age + ", 0);";
    console.log(query);
    mysql.executeQuery(query, function (err) {
        if (err){
            callback(err);
        } else {
            callback(null);
        }
    });
};

module.exports.login = login;
module.exports.signup = signup;