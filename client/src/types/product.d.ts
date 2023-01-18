/** 상품추가 - 유저 입력 데이터 */
export interface AddProductData {
  title: string;
  category: {
    big: string;
    medium: string;
    small: string;
  };
  tradeArea: string;
  quality: string;
  tradeable: boolean;
  price: number;
  isIncludeDeliveryCost: boolean;
  description: string;
  quantity: number;
}

/** 상품추가 - 업로드 이미지 */
export interface AddProductImage {
  id: number;
  image: Blob;
}

/** 내 상품 - 상품 목록 데이터 */
export interface ManageProductData {
  like_count: number;
  price: number;
  product_id: string;
  sumbnail: string;
  title: string;
  modified_at: string;
}

/** 상품 상세보기 - 상세보기 데이터 */
export interface ProductInfoData {
  productId: string;
  author: string;
  categoryBig: string;
  categoryMedium: string;
  categorySmall: string;
  createdAt: string;
  description: string;
  includeDeliveryCost: number;
  likeCount: number;
  modifiedAt: string;
  price: number;
  quality: string;
  quantity: number;
  sellStatus: string;
  showCount: number;
  title: string;
  tradeArea: string;
  tradeable: number;
  images: string[];
}

/** 추천상품 - 상품 데이터 */
export interface RecommandProductData {
  productId: string;
  title: string;
  price: number;
  modifiedAt: string;
  image: string;
}

/** 상품 수정 - 기존 및 유저의 입력 데이터 */
export interface EditProductData {
  author: string;
  categoryBig: string;
  categoryMedium: string;
  categorySmall: string;
  createdAt: string;
  description: string;
  images: string[];
  includeDeliveryCost: number;
  likeCount: number;
  modifiedAt: string;
  price: number;
  productId: string;
  quality: string;
  quantity: number;
  sellStatus: string;
  showCount: number;
  title: string;
  tradeArea: string;
  tradeable: boolean;
}
