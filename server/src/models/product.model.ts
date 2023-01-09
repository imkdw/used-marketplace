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
      "INSERT INTO products(" +
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

  static addProductImage = async (productId: string, imageUrls: string[]) => {
    const query = "INSERT INTO products_image(product_id, image_url) VALUES(?, ?)";

    try {
      await Promise.all(
        imageUrls.map(async (imageUrl) => {
          const values = [productId, imageUrl];
          await connectionPool.execute(query, values);
        })
      );
    } catch (err: any) {
      throw {
        status: 500,
        message: err.message,
      };
    }
  };

  static myProducts = async (email: string) => {
    const query = "SELECT title, price, like_count FROM products WHERE author=?";
    const values = [email];
    try {
      const [rows, fields]: [any[], FieldPacket[]] = await connectionPool.execute(query, values);
      return rows;
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };
}

export default ProductModel;
