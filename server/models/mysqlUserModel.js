const mysql = require("mysql");

const db = mysql.createConnection({
  host: "mysql-lumos.cqw54zvzfbpb.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "lumos",
  password: "lumosTest!",
  database: "mysqlLumos",
});

db.connect((err) => {
  if (err) {
    console.log("error: ", err);
    return err;
  }

  console.log("fucking it worked u shithole fuck u");
});
