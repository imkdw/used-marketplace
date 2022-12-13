import { Request, Response, NextFunction } from "express";
import { RegisterUserDTO } from "../types/auth";
import AuthService from "../services/auth.service";

export default class AuthController {
  static register = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: RegisterUserDTO = req.body;

    try {
      await AuthService.register(userDTO);
      res.status(200).json({ email: userDTO.email, nickname: userDTO.nickname });
    } catch (error: any) {
      const errorMessage = error.message;

      /** 사용자 입력값(email, nickname)에 중복이 있을경우 */
      if (
        errorMessage === "exist_email" ||
        errorMessage === "exist_nickname" ||
        errorMessage === "exist_email_and_nickname"
      ) {
        res.status(400).json({ message: errorMessage });
      } else {
        res.status(500).json({ message: "internal_server_error" });
      }
    }
  };
}
