import { v4 } from "uuid";
import bcrypt from "bcrypt";

class Secure {
  static getUUID = () => {
    return v4();
  };

  static encryptToHash = async (plainText: string) => {
    return await bcrypt.hash(plainText, 10);
  };

  static compareHash = async (plainText: string, hashedText: string) => {
    console.log(plainText, hashedText);
    return await bcrypt.compare(plainText, hashedText);
  };
}

export default Secure;
