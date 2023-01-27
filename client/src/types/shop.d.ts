interface MyShopProduct {
  createdAt: string;
  price: number;
  productId: string;
  sumbnail: string;
  title: string;
  tradeArea: string;
}

interface MyShopInfo {
  createdAt: string;
  email: string;
  introduce: string;
  nickname: string;
  profileImage: string;
  userId: string;
}

export interface MyShopData {
  products: MyShopProduct[] | never[];
  shop: MyShopInfo;
}
