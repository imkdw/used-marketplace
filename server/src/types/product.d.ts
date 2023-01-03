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
  author: string;
}
