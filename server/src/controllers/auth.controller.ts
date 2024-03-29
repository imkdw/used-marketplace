import { Request, Response, NextFunction } from "express";
import { LoginUserDTO, RegisterUserDTO } from "../types/auth";
import AuthService from "../services/auth.service";

export default class AuthController {
  static register = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: RegisterUserDTO = req.body;

    try {
      await AuthService.register(userDTO);
      res.status(201).json({ email: userDTO.email, nickname: userDTO.nickname });
    } catch (error: any) {
      res.status(error.status).json({ message: error.message });
    }
  };

  static login = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: LoginUserDTO = req.body;

    try {
      const userInfo = await AuthService.login(userDTO);

      /** accessToken이 없을경우 */
      if (userInfo.accessToken.length === 0) {
        res.status(500).json({ message: "jwt error" });
        return;
      }

      res.status(200).json({ ...userInfo });
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static kakaoLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.body;

    try {
      const data = await AuthService.kakaoLogin(code);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message || "에러발생" });
    }
  };
}
