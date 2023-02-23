const mysql = require("mysql");

// create the connection to database
const db = mysql.createConnection({
  host: "bavel8iozwnjbuskfhud-mysql.services.clever-cloud.com",
  user: "ujmhxqapzdm0itkt",
  password: "zTaXT8Ja9LpVC7k67bSG",
  database: "demo_db",
});

module.exports = db;
