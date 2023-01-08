import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtConfig } from "../config/config";

interface DecodedTokenReturns extends JwtPayload {
  email: string;
  nickname: string;
}

class Jwt {
  static createToken = (email: string, nickname: string): string => {
    const { secretKey, expiresIn, algorithm } = jwtConfig;

    if (secretKey && expiresIn) {
      return jwt.sign({ email, nickname }, secretKey, { expiresIn });
    }

    return "";
  };

  static verifyToken = (accessToken: string) => {
    const { secretKey } = jwtConfig;
    return jwt.verify(accessToken, secretKey);
  };

  static decodeToken = (accessToken: string): DecodedTokenReturns => {
    const decodedToken = jwt.decode(accessToken) as DecodedTokenReturns;
    return decodedToken;
  };
}

export default Jwt;
