import dotenv from "dotenv";

dotenv.config();

const nodeDev = process.env.NODE_DEV;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: nodeDev === "test" ? process.env.DB_DATABASE_TEST : process.env.DB_DATABASE,
};

export default dbConfig;
