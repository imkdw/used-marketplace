export interface UploadImage {
  id: number;
  image: Blob;
}

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

export interface AddProductImage {
  id: number;
  image: Blob;
}

export interface ManageProductData {
  like_count: number;
  price: number;
  product_id: string;
  sumbnail: string;
  title: string;
  modified_at: string;
}

export interface ProductInfoData {
  author: string;
  category_big: string;
  category_medium: string;
  category_small: string;
  created_at: string;
  description: string;
  include_delivery_cost: number;
  like_count: number;
  modified_at: string;
  price: number;
  quality: string;
  quantity: number;
  sell_status: string;
  show_count: number;
  title: string;
  trade_area: string;
  tradeable: number;
  images: string[];
}

export interface RecommandProductData {
  product_id: string;
  title: string;
  price: number;
  modified_at: string;
  image: string;
}
