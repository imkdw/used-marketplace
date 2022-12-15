import AuthModel from "../models/auth.model";
import { LoginReturn, LoginUserDTO, RegisterUserDTO } from "../types/auth";
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
        throw {
          status: 400,
          message: "exist_email_and_nickname",
        };
      }

      /** 이메일이 중복되는 경우 */
      if (userByEmail[0].email === userDTO.email) {
        throw {
          status: 400,
          message: "exist_email",
        };
      }
    }

    if (userByNickname.length !== 0) {
      /** 닉네임이 중복되는 경우 */
      if (userByNickname[0].nickname === userDTO.nickname) {
        throw {
          status: 400,
          message: "exist_nickname",
        };
      }
    }

    const hashedPassword = await Secure.encryptToHash(userDTO.password);
    userDTO.password = hashedPassword;

    try {
      const registerRecord = await AuthModel.register(userDTO);
      return registerRecord;
    } catch (error: any) {
      throw error;
    }
  };

  static login = async (userDTO: LoginUserDTO): Promise<LoginReturn> => {
    try {
      const user = await AuthModel.getUserByEmail(userDTO.email);

      /** 유저가 없을경우 */
      if (user.length === 0) {
        throw {
          status: 400,
          message: "bad_request",
        };
      }

      const hashedPassword = user[0].password;
      const isSamePassword = await Secure.compareHash(userDTO.password, hashedPassword);

      /** 비밀번호가 일치하지 않을경우 */
      if (!isSamePassword) {
        throw {
          status: 400,
          message: "bad_request",
        };
      }

      const accessToken = Jwt.createToken(user[0].email, user[0].nickname);
      return { accessToken, nickname: user[0].nickname, email: user[0].email };
    } catch (error: any) {
      throw {
        status: error.status,
        message: error.message,
      };
    }
  };
}
