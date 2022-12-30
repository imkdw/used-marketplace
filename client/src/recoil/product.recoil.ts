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
    category: "",
    tradeArea: "",
    status: "new",
    tradeable: true,
    price: 0,
    description: "",
    quantity: 1,
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
