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
  author: string;
}

export interface AddProductImage {
  id: number;
  image: Blob;
}
