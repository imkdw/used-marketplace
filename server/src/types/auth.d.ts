import { RowDataPacket } from "mysql2";

export interface RegisterUserDTO {
  email: string;
  password: string;
  rePassword?: string;
  nickname: string;
}

export interface GetUserByEmailReturn extends RowDataPacket {
  email: string;
  nickname: string;
  password: string;
}

export interface GetUserByNicknameReturn extends RowDataPacket {
  email: string;
  nickname: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface LoginReturn {
  accessToken: string;
  email: string;
  nickname: string;
}
