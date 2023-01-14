import { atom } from "recoil";

/** 현재 페이지 정보를 저장 */
export const currentPageState = atom({
  key: "currentPageState",
  default: "",
});
