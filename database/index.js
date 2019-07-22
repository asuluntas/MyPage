const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


var read = function(callback) {
  connection.query('SELECT * FROM tablename', function(err, results) {
    callback(err, results);
  });
}

// var create = function(param1, param2, callback) {
//   connection.query(`INSERT INTO tablename (param1, param2) VALUES (?, ?)`, [param1, param2], function(err, results) {
//     callback(err, results);
//   });
// }

// var update = function(param1, param2,callback) {
//   connection.query('UPDATE tablename SET param1 = ? WHERE param2 = (?)', [param1, param2], function(err, results) {
//     callback(err, results);
//   });
// }

// var delete = function(param1, param2, callback) {
//   connection.query('DELETE FROM tablename WHERE param1=? AND param2=?', [param1, param2], function(err, results) {
//     callback(err, results);
//   });
// }

module.exports = {
  read,
  // create,
  // update,
  // delete
}

