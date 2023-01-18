import { atom } from "recoil";
import { AddProductData, AddProductImage, EditProductData, ProductInfoData } from "../types/product";

/** 상품 추가 페이지 유저 입력값  */
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
  },
});

/** 상품 추가 페이지 업로드 이미지 */
export const addProductImageState = atom<AddProductImage[]>({
  key: "addProductImageState",
  default: [],
});

/** 상품 추가 페이지 주소검색 활성화 여부 */
export const enableDaumPostcodeState = atom<boolean>({
  key: "enableDaumPostcode",
  default: false,
});

/** 상품 상세보기 페이지 상품정보 */
export const productInfoDataState = atom<ProductInfoData>({
  key: "productInfoDataState",
  default: {
    productId: "",
    author: "",
    categoryBig: "",
    categoryMedium: "",
    categorySmall: "",
    createdAt: "",
    description: "",
    includeDeliveryCost: 0,
    likeCount: 0,
    modifiedAt: "",
    price: 0,
    quality: "",
    quantity: 0,
    sellStatus: "",
    showCount: 0,
    title: "",
    tradeArea: "",
    tradeable: 0,
    images: [],
  },
});

export const editProductDataState = atom<EditProductData>({
  key: "editProductDataState",
  default: {
    productId: "",
    author: "",
    categoryBig: "",
    categoryMedium: "",
    categorySmall: "",
    createdAt: "",
    description: "",
    includeDeliveryCost: 0,
    likeCount: 0,
    modifiedAt: "",
    price: 0,
    quality: "",
    quantity: 0,
    sellStatus: "",
    showCount: 0,
    title: "",
    tradeArea: "",
    tradeable: false,
    images: [],
  },
});
