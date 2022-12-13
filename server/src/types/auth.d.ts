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
}
