/**
 * https://www.npmjs.com/package/mysql2
 */

import mysql from "mysql2/promise";
import { dbConfig } from "../config/dbConfig";

export const connectionPool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
