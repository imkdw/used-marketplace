import { RowDataPacket } from "mysql2";

export interface GetShopRetunrs extends RowDataPacket {
  email: string;
  nickname: string;
  created_at: string;
  profile_image: string;
  user_id: string;
  introduce: string;
}

export interface ShopProductsReturns extends RowDataPacket {
  product_id: string;
  title: string;
  trade_area: string;
  price: number;
  created_at: string;
}

// const query = "SELECT product_id, title, trade_area, price, created_at WHERE author=?";
