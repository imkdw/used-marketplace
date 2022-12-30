export interface UploadImage {
  id: number;
  image: Blob;
}

export interface AddProductData {
  title: string;
  category: string;
  tradeArea: string;
  status: string;
  tradeable: boolean;
  price: number;
  description: string;
  quantity: number;
}

export interface AddProductImage {
  id: number;
  image: Blob;
}
