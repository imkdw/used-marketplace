import { Request, Response, NextFunction } from "express";
import { RegisterUserDTO } from "../types/auth";
import AuthService from "../services/auth.service";

export default class AuthController {
  static register = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: RegisterUserDTO = req.body;
    const userRecord = await AuthService.register(userDTO);
  };
}
