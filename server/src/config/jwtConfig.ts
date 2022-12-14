import dotenv from "dotenv";

dotenv.config();

const jwtConfig = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};

export default jwtConfig;
