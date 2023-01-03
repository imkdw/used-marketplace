import { FieldPacket } from "mysql2";
import { connectionPool } from "../utils/db";
import { AddProductData } from "./../types/product.d";

class ProductModel {
  static addProduct = async (userDTO: AddProductData) => {
    const {
      productId,
      title,
      category,
      tradeArea,
      quality,
      tradeable,
      price,
      isIncludeDeliveryCost,
      description,
      quantity,
      author,
    } = userDTO;

    const query =
      "INSERT INTO product(" +
      "product_id, title, category_big, category_medium, category_small, trade_area, quality, tradeable, price, include_delivery_cost, description, quantity, author) " +
      "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      productId,
      title,
      category.big,
      category.medium,
      category.small,
      tradeArea,
      quality,
      tradeable ? 1 : 0,
      price,
      isIncludeDeliveryCost ? 1 : 0,
      description,
      quantity,
      author,
    ];

    try {
      await connectionPool.execute(query, values);
    } catch (err: any) {
      throw {
        status: 500,
        message: err.message,
      };
    }
  };
}

export default ProductModel;
