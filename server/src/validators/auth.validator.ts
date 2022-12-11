import { RegisterUserDTO } from "../types/auth";
import { Request, Response, NextFunction } from "express";

/**
 * 에러를 반환하기 위한 함수
 * @param statusCode {number} HTTP 상태 코드
 * @param message {string} JSON 내부에 반환될 메세지
 */
const responseError = (res: Response, statusCode: number, message: string) => {
  res.status(statusCode).json({ message });
  return;
};

export default class AuthValidator {
  static userRegister = (req: Request, res: Response, next: NextFunction) => {
    const userDTO: RegisterUserDTO = req.body;
    const { email, nickname, password, rePassword } = userDTO;
    const specialCharRegex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    /** 이메일 : 정규식으로 형식이 올바른지 확인 */
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      responseError(res, 400, "이메일 형식이 올바르지 않습니다.");
      return;
    }

    /** 닉네임 : 특수문자가 들어갈 수 없으며 2이상, 8이하의 자리로 구성 */
    const nicknameRule = nickname.length !== 0 && nickname.length >= 2 && nickname.length <= 8;
    if (specialCharRegex.test(nickname) || !nicknameRule) {
      responseError(res, 400, "닉네임 형식이 올바르지 않습니다.");
      return;
    }

    /** 비밀번호 : 특수문자를 포함하여 10자리 이상으로 구성 */
    const passwordRule = password.length >= 10 && password.length !== 0;
    if (!specialCharRegex.test(password) || !passwordRule) {
      responseError(res, 400, "비밀번호 형식이 올바르지 않습니다.");
      return;
    }

    /** 비밀번호 확인 : 입력된 비밀번호와 일치한지 확인 */
    const rePasswordRule = password === rePassword;
    if (!rePasswordRule) {
      responseError(res, 400, "비밀번호가 일치하지 않습니다.");
      return;
    }

    next();
  };
}
