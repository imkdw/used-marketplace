import { FieldPacket } from "mysql2";
import { GetUserByEmailReturn, GetUserByNicknameReturn, RegisterUserDTO } from "../types/auth";
import { connectionPool } from "../utils/db";

/**
 * DB execute 에러 정의
 * DR_DUP_ENTRY : 중복된 데이터 발견
 */

export default class AuthModel {
  static register = async (userId: string, userDTO: RegisterUserDTO) => {
    const query = `INSERT INTO users(user_id, email, nickname, password) VALUES(?, ?, ?, ?)`;
    const values = [userId, userDTO.email, userDTO.nickname, userDTO.password];
    try {
      await connectionPool.execute(query, values);
    } catch (error: any) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };

  static getUserByEmail = async (email: string) => {
    const query = "SELECT user_id, email, nickname, password FROM users WHERE email=?";
    const values = [email];
    try {
      const [rows, fields]: [GetUserByEmailReturn[], FieldPacket[]] = await connectionPool.execute(
        query,
        values
      );
      return rows;
    } catch (error: any) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };

  static getUserByNickname = async (nickname: string) => {
    const query = "SELECT user_id, email, nickname FROM users WHERE nickname=?";
    const values = [nickname];
    try {
      const [rows, fields]: [GetUserByNicknameReturn[], FieldPacket[]] = await connectionPool.execute(
        query,
        values
      );
      return rows;
    } catch (error: any) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };
}
