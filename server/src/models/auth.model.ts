import { RegisterUserDTO } from "../types/auth";
import { connectionPool } from "../utils/db";

export default class AuthModel {
  static create = async (userDTO: RegisterUserDTO) => {
    const query = `INSERT INTO users(email, nickname, password) VALUES(?, ?, ?)`;
    const values = [userDTO.email, userDTO.nickname, userDTO.password];
    const [row, fields] = await connectionPool.query(query, values);
    console.log(row, fields);
  };
}
