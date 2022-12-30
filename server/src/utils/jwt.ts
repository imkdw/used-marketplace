import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/config";

class Jwt {
  static createToken = (email: string, nickname: string): string => {
    const { secretKey, expiresIn } = jwtConfig;

    if (secretKey && expiresIn) {
      return jwt.sign({ email, nickname }, secretKey, { expiresIn });
    }

    return "";
  };
}

export default Jwt;
