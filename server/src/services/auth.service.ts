import AuthModel from "../models/auth.model";
import { LoginReturn, LoginUserDTO, RegisterUserDTO } from "../types/auth";
import Secure from "../utils/secure";
import Jwt from "../utils/jwt";
import axios from "axios";
import { kakaoConfig } from "../config/config";

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

    /** 비밀번호 암호화 */
    const hashedPassword = await Secure.encryptToHash(userDTO.password);
    userDTO.password = hashedPassword;

    /** hash값으로 유저 ID 생성 */
    const userId = Secure.getUUID();

    try {
      const registerRecord = await AuthModel.register(userId, userDTO);
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
      console.log(hashedPassword, isSamePassword);

      /** 비밀번호가 일치하지 않을경우 */
      if (!isSamePassword) {
        throw {
          status: 400,
          message: "bad_request",
        };
      }

      const accessToken = Jwt.createToken(user[0].email, user[0].nickname);

      return {
        accessToken,
        nickname: user[0].nickname,
        email: user[0].email,
        userId: user[0].user_id,
      };
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };

  static kakaoLogin = async (code: string) => {
    try {
      /** 카카오 OAuth를 통해 사용자의 accessToken 가져오기 */
      const token = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: kakaoConfig.restApikey,
          redirect_uri: kakaoConfig.redirectUri,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      /** accessToken이 없는경우 */
      if (!token.data) {
        throw {
          status: 500,
          message: "OAuth error",
        };
      }

      /** acessToken으로 사용자 정보 가져오기 */
      const kakaoUser = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      });

      /** 사용자 정보 가져오기 실패 */
      if (!kakaoUser) {
        throw {
          status: 500,
          message: "Internal Server Error",
        };
      }

      const email = kakaoUser.data.kakao_account.email;
      const nickname = kakaoUser.data.properties.nickname;

      /** 사용자가 가입되어있는 유저인지 체크 */
      const userByEmail = await AuthModel.getUserByEmail(email);

      /** 신규 유저인 경우 */
      if (userByEmail.length === 0) {
        return {
          existUser: false,
          data: {
            email,
            nickname,
          },
        };
      }

      /** 기존 가입된 유저면 accessToken 발행 */
      const accessToken = Jwt.createToken(email, nickname);

      return {
        existUser: true,
        accessToken: accessToken,
        email: email,
        nickname: nickname,
        userId: userByEmail[0].user_id,
      };
    } catch (error: any) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };
}
