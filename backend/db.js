import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
  });

  export default db;
