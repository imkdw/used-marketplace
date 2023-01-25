import { atom } from "recoil";

export const loginUserState = atom({
  key: "loginUserState",
  default: {
    userId: "",
    accessToken: "",
    email: "",
    nickname: "",
  },
});
