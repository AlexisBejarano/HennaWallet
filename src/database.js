import { Sequelize } from "sequelize";

const connection = new Sequelize('hennacontrol', 'root', '15546BEJ',{ 
  host: 'localhost',
  dialect: 'mysql',
  port: 53088
})

export default connection

/*const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '15546BEJ',
  database: 'hennacontrol',
  port: 53088
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;*/