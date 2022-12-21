import { atom } from "recoil";

export const enableProductTabState = atom({
  key: "enableProductTabState",
  default: "add",
});

export const addProductDataState = atom({
  key: "addProductDataState",
  default: "",
});
