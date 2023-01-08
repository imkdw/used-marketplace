import { Request, Response, NextFunction } from "express";
import Jwt from "../utils/jwt";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  /** 헤더에 토큰이 없을경우 */
  if (!accessToken) {
    res.status(401).json({ message: "token_not_found" });
    return;
  }

  /** 토큰 유효성 검증 */
  try {
    Jwt.verifyToken(accessToken);
    const decodedToken = Jwt.decodeToken(accessToken);
    res.locals.email = decodedToken.email;

    // TODO: res.locals.nickname은 미사용시 삭제필요
    res.locals.nickname = decodedToken.nickname;
  } catch (err: any) {
    switch (err.message) {
      case "jwt expired":
        res.status(401).json({ message: "jwt_expired" });
        return;
    }
  }

  next();
};

export default isAuth;
