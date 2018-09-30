var mysql = require('mysql');

var connection = mysql.createPool({
 connectionLimit: 100,
 host:'localhost',
 user:'admin',
 password:'1234',
 database:'users',
 port: 3306,
 debug: false,
 multipleStatements: true
});
// sarasa
module.exports.connection = connection;