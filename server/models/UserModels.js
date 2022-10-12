const { Pool, Client } = require("pg");

const pool = new Pool({
  host: "lumos-postgres.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
  port: 5432,
  user: "lumos",
  database: "postgresLumos",
  password: "lumosTest!",
});


pool.connect((err) => {
  if (err) {
    console.log("error: ", err);
    return err;
  }

  console.log("it worked");
});


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
