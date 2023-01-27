import { atom } from "recoil";
import { MyShopData } from "../types/shop";

export const myShopDataState = atom<MyShopData>({
  key: "myShopDataState",
  default: {
    products: [],
    shop: {
      createdAt: "",
      email: "",
      introduce: "",
      nickname: "",
      profileImage: "",
      userId: "",
    },
  },
});
