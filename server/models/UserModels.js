require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.PG_URI,
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
