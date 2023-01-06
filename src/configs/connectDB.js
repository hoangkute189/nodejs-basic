import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// // simple query
// connection.query(
//   'SELECT * FROM `user` ',
//   function(err, results, fields) {
//     console.log('>>> Check my sql:')
//     // console.log(results);
//     let rows = results.map((row) => {
//         return row
//     }) 
//     console.log(rows);
//   }
// );

export default connection;