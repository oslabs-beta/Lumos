const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    'postgres://hqtdaxpj:QBKrOx1TsD79gVw-GSLQ89b335iqReba@chunee.db.elephantsql.com/hqtdaxpj',
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
