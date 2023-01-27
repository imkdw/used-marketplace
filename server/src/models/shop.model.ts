import { FieldPacket } from "mysql2";
import { connectionPool } from "../utils/db";

import { GetShopRetunrs, ShopProductsReturns } from "../types/shop.d";

export default class ShopModel {
  static getShop = async (userId: string) => {
    const query =
      "SELECT email, nickname, created_at, profile_image, user_id, introduce from users where user_id=?";
    const values = [userId];

    try {
      const [rows, fields]: [GetShopRetunrs[], FieldPacket[]] = await connectionPool.execute(query, values);
      return rows;
    } catch (err: any) {
      throw {
        status: 500,
        message: err.message,
      };
    }
  };

  static shopProducts = async (email: string) => {
    const query = "SELECT product_id, title, trade_area, price, created_at FROM products WHERE author=?";
    const values = [email];

    try {
      const [rows, fields]: [ShopProductsReturns[], FieldPacket[]] = await connectionPool.execute(
        query,
        values
      );
      return rows;
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };
}
