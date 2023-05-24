import { Pool } from 'pg';

const pool = new Pool();

export default {
  query: (text: string, arr?: string[]) => {
    console.log('Executed query:', text);
    return pool.query(text, arr);
  },
};
