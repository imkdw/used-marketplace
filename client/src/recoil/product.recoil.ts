import { atom } from "recoil";
import { AddProductData, AddProductImage } from "../types/product";

export const enableProductTabState = atom<string>({
  key: "enableProductTabState",
  default: "add",
});

export const addProductDataState = atom<AddProductData>({
  key: "addProductDataState",
  default: {
    title: "",
    category: {
      big: "의류",
      medium: "남자옷",
      small: "정장",
    },
    tradeArea: "",
    quality: "old",
    tradeable: false,
    price: 0,
    isIncludeDeliveryCost: false,
    description: "",
    quantity: 1,
    author: "",
  },
});

export const addProductImageState = atom<AddProductImage[]>({
  key: "addProductImageState",
  default: [],
});

export const enableDaumPostcodeState = atom<boolean>({
  key: "enableDaumPostcode",
  default: false,
});
