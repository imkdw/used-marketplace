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