import AuthModel from "../models/auth.model";
import { RegisterUserDTO } from "../types/auth";
import Secure from "../utils/secure";

export default class AuthService {
  static register = async (userDTO: RegisterUserDTO) => {
    const hashedPassword = await Secure.encryptToHash(userDTO.password);
    userDTO.password = hashedPassword;
    const registerRecord = AuthModel.create(userDTO);
  };
}
