const { Client } = require('pg');
module.exports = new Client({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "SOLAR",
})
// module.exports = {
//   host: "localhost",
//   user: "postgres",
//   password: "root",
//   database: "SOLAR",
// };

// module.exports = {
//   host: "us-east.connect.psdb.cloud",
//   user: "a27y80vljf9gnhsxl3ru",
//   password: "pscale_pw_tIzTwKrG6c2jDzejd2tV48PDlR4oo7kbM4G9u2e13LQ",
//   database: "dbsolar",
//   multipleStatements: true,
//   ssl: {
//     "rejectUnauthorized": "true",
//   }
// };




