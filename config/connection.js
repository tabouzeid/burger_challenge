// Set up MySQL connection.
var mysql = require("mysql");

var db_host = process.env.DB_URL || "localhost";
var db_username = process.env.DB_USERNAME || "root";
var db_password = process.env.DB_PASSWORD || "password";
var db_database = process.env.DB_DATABASE || "burgers_db";

var connection = mysql.createConnection({
  host: db_host,
  port: 3306,
  user: db_username,
  password: db_password,
  database: db_database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
