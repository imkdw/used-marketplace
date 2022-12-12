export interface RegisterAccount {
  email: string;
  nickname: string;
  password: string;
  rePassword: string;
}

export interface RegisterAccountValid {
  email: boolean;
  nickname: boolean;
  password: boolean;
  rePassword: boolean;
}
