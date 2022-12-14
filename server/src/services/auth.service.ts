import AuthModel from "../models/auth.model";
import { LoginUserDTO, RegisterUserDTO } from "../types/auth";
import Secure from "../utils/secure";
import Jwt from "../utils/jwt";

export default class AuthService {
  static register = async (userDTO: RegisterUserDTO) => {
    /** 기존에 존재하는 유저인지 확인 */
    const userByEmail = await AuthModel.getUserByEmail(userDTO.email);
    const userByNickname = await AuthModel.getUserByNickname(userDTO.nickname);

    if (userByEmail.length !== 0) {
      /** 이메일과 닉네임 모두 중복되는 경우 */
      if (userByEmail[0].email === userDTO.email && userByEmail[0].nickname === userDTO.nickname) {
        console.log("이메일, 닉네임 중복");
        throw new Error("exist_email_and_nickname");
      }

      console.log(userByEmail[0].email, userDTO.email);
      /** 이메일이 중복되는 경우 */
      if (userByEmail[0].email === userDTO.email) {
        console.log("이메일 중복");
        throw new Error("exist_email");
      }
    }

    if (userByNickname.length !== 0) {
      /** 닉네임이 중복되는 경우 */
      if (userByNickname[0].nickname === userDTO.nickname) {
        console.log("닉네임 중복");
        throw new Error("exist_nickname");
      }
    }

    const hashedPassword = await Secure.encryptToHash(userDTO.password);
    userDTO.password = hashedPassword;

    try {
      const registerRecord = await AuthModel.register(userDTO);
      return registerRecord;
    } catch (error: any) {
      /** 입력값 외에 오류가 있을경우 */
      throw new Error("internal_server_error");
    }
  };

  static login = async (userDTO: LoginUserDTO): Promise<string> => {
    try {
      const user = await AuthModel.getUserByEmail(userDTO.email);

      /** 유저가 없을경우 */
      if (user.length === 0) {
        throw new Error("bad_request");
      }

      const hashedPassword = user[0].password;
      const isSamePassword = await Secure.compareHash(userDTO.password, hashedPassword);

      /** 비밀번호가 일치하지 않을경우 */
      if (!isSamePassword) {
        throw new Error("bad_request");
      }

      const accessToken = Jwt.createToken(user[0].email, user[0].nickname);
      return accessToken;
    } catch (error: any) {
      throw new Error("internal_server_error");
    }
  };
}
