import { FieldPacket } from "mysql2";
import { connectionPool } from "../utils/db";
import { AddProductData, MyProductsImageReturns, MyProductsReturns } from "./../types/product.d";

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
    const query =
      "SELECT product_id, title, price, like_count, date_format(modified_at, '%Y-%m-%d %h:%i') as modified_at FROM products WHERE author=?";
    const values = [email];
    try {
      const [rows, fields]: [MyProductsReturns[], FieldPacket[]] = await connectionPool.execute(
        query,
        values
      );
      return rows;
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };

  static myProductsImage = async (productId: string) => {
    const query = "SELECT image_url FROM products_image WHERE product_id=?";
    const values = [productId];
    try {
      const [rows, fields]: [MyProductsImageReturns[], FieldPacket[]] =
        await connectionPool.execute(query, values);
      return rows;
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };

  static productInfo = async (productId: string) => {
    const query = "SELECT * FROM products WHERE product_id=?";
    const values = [productId];

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
