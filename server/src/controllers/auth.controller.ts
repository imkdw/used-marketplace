import { Request, Response, NextFunction } from "express";
import { LoginUserDTO, RegisterUserDTO } from "../types/auth";
import AuthService from "../services/auth.service";
import axios from "axios";

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
    } catch (error: any) {
      res.status(error.status).json({ message: error.message });
    }
  };

  static kakaoLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.body;

    try {
      const userData = await AuthService.kakaoLogin(code);
      console.log("userData:", userData);
      res.status(200).json(userData);
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message || "에러발생" });
    }
  };
}
