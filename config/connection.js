var Sequelize = require("sequelize");
// var sequelize;
var connection;
var mysql = require("mysql");

// var sequelize = new Sequelize("youtilitydb", "root", "root", {
//     port: 8889,  
//     host: "localhost",
//     dialect: "mysql",
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var sequelize =  new Sequelize("youtilitydb", "root", "root", {
    // port: 8889,  
    host: "localhost",
    dialect: "mysql",
});
};

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         port: 3306,
//         user: 'pk9gqrj7s7qvwc9r',
//         password: 'fedkqfeka73chrio',
//         database: 'onc3ilniz1id5wwi',
//         use_env_variable: "JAWSDB_URL",
//         dialect: "mysql"
//     });
// }

// sequelize.connect();
// connection.connect(function(err) {
//     if (err){
//         console.log("Error connecting: " + err.stack);
//     }
//         console.log("connected as id " + connection.threadId);
// });
connection.connect();
module.exports = connection;

module.exports = sequelize;