const { Pool, Client } = require("pg");
// const { RDSClient } = require("@aws-sdk/client-rds");
// const { RDS } = require("aws-sdk");

// const signer = new RDSClient();

// const signerOptions = {
//   region: "us-east-1",
//   hostname: "lumos-database.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
//   port: 5432,
//   username: "lumos",
// };

// const signer = new RDS.Signer();

// const getPassword = () => signer.getAuthToken(signerOptions);

const pool = new Pool({
  host: "lumos-postgres.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
  port: 5432,
  user: "lumos",
  database: "postgresLumos",
  password: "lumosTest!",
});

// const pool = new Pool({
//   connectionString: "lumos-database.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
// });

pool.connect((err) => {
  if (err) {
    console.log("error: ", err);
    return err;
  }

  console.log("it worked");
});

// const client = new Client({
//   host: "lumos-database.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
//   port: 5432,
//   user: "lumos",
//   password: "lumosTest!",
//   database: "lumos",
// });

// const pool = new Pool({
//   connectionString:
//     "postgres://hqtdaxpj:QBKrOx1TsD79gVw-GSLQ89b335iqReba@chunee.db.elephantsql.com/hqtdaxpj",
// });

// client.connect((err) => {
//   if (err) {
//     console.log("error: ", err);
//     return err;
//   }

//   console.log("connected to database lets fucking go!!!");
// });

// client.on("error", (err) => {
//   console.log("something bad has happened!", err.stack);
// });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
