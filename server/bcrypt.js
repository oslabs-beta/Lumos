const bcrypt = require("bcryptjs");

let result;

async function bruh() {
  const res = await bcrypt.hash(
    "KfSQtRB5TgNGpCdXo2CSLO7fmWuYah11cj28OHNe",
    10,
    (err, data) => {
      // console.log(data);
      // result = data;
      // console.log(result)
      return data;
    }
  );

  await bcrypt.compare(
    "KfSQtRB5TgNGpCdXo2CSLO7fmWuYah11cj28OHNe",
    res,
    (err, data) => {
      if (err) console.log("bruh: ", err);
      else {
        console.log("data: ", data);
      }
    }
  );
}

bruh();
