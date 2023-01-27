import { RowDataPacket } from "mysql2";

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
  tradeable: string;
  price: number;
  isIncludeDeliveryCost: boolean;
  description: string;
  quantity: number;
  productId?: string;
  author?: string;
}

/** 상품수정 - 유저 입력 데이터 */
export interface EditProductData {
  productId: string;
  title: string;
  categoryBig: string;
  categoryMedium: string;
  categorySmall: string;
  tradeArea: string;
  quality: string;
  tradeable: number;
  price: number;
  includeDeliveryCost: number;
  description: string;
  quantity: number;
  author: string;
  likeCount: number;
  showCount: number;
  createdAt: string;
  modifiedAt: string;
  sellStatus: string;
  images: string[];
}

/** Multer를 통해 업로드된 이미지  */
export interface UploadImage extends Express.Multer.File {
  buffer: {
    type: string;
    data: Buffer;
  };
}

/** Model - 내 상품 조회 반환 데이터 */
export interface MyProductsReturns extends RowDataPacket {
  product_id: string;
  title: string;
  price: string;
  like_count: string;
  modified_at: string;
}

/** Model - 내 상품 이미지 반환 데이터 */
export interface MyProductsImageReturns extends RowDataPacket {
  image_url: string;
  is_sumbnail: number;
}

/** Model - 상품 상세보기 반환 데이터 */
export interface ProductInfoReturns extends RowDataPacket {
  product_id: string;
  title: string;
  category_big: string;
  category_medium: string;
  category_small: string;
  trade_area: string;
  quality: string;
  tradeable: number;
  price: number;
  include_delivery_cost: number;
  description: string;
  quantity: number;
  author: string;
  like_count: number;
  show_count: number;
  created_at: string;
  modified_at: string;
  sell_status: string;
}

/** Model - 모든 상품 가져오기(50개) 반환 데이터 */
export interface AllProductReturns extends RowDataPacket {
  product_id: string;
  title: string;
  price: number;
  modified_at: string;
}
