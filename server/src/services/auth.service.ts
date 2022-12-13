import AuthModel from "../models/auth.model";
import { RegisterUserDTO } from "../types/auth";
import Secure from "../utils/secure";

export default class AuthService {
  static register = async (userDTO: RegisterUserDTO) => {
    /** 기존에 존재하는 유저인지 확인 */
    const isExistUser = await AuthModel.getUserByEmail(userDTO.email);

    /** 유저가 존재하는 경우 */
    if (isExistUser.length !== 0) {
      /** 이메일과 닉네임 모두 중복되는 경우 */
      if (isExistUser[0].email.length !== 0 && isExistUser[0].nickname.length !== 0) {
        throw new Error("exist_email_and_nickname");
      }

      /** 이메일이 중복되는 경우 */
      if (isExistUser[0].email.length !== 0) {
        throw new Error("exist_email");
      }

      /** 닉네임이 중복되는 경우 */
      if (isExistUser[0].nickname.length !== 0) {
        throw new Error("exist_nickname");
      }
    }

    const hashedPassword = await Secure.encryptToHash(userDTO.password);
    userDTO.password = hashedPassword;

    try {
      const registerRecord = await AuthModel.create(userDTO);
      return registerRecord;
    } catch (error: any) {
      /** 입력값 외에 오류가 있을경우 */
      throw new Error("internal_server_error");
    }
  };
}
