var Sequelize = require("sequelize");
var connection;
var mysql = require("mysql");

var sequelize = new Sequelize("youtilitydb", "root", "root", {
    port: 8889,  
  host: "localhost",
  dialect: "mysql",
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'youtilitydb'
  });
};


module.exports = sequelize;