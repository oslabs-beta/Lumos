require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://hqtdaxpj:QBKrOx1TsD79gVw-GSLQ89b335iqReba@chunee.db.elephantsql.com/hqtdaxpj",
});

// pool.connect((err, client, release) => {
//   if (err) return err;

//   console.log("connected to database thingy");

//   console.log(client, release);
// });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

// module.exports = {
//   query: (text, params, callback) => {
//     pool.getConnection((err, connection) => {
//       if (err) callback(err);
//       else {
//         console.log(connection);
//         return pool.query(text, params, callback);
//       }
//     });
//   },
// };
