import { FieldPacket } from "mysql2";
import { connectionPool } from "../utils/db";

import {
  AddProductData,
  AllProductReturns,
  EditProductData,
  MyProductsImageReturns,
  MyProductsReturns,
  ProductInfoReturns,
} from "./../types/product.d";

class ProductModel {
  /** 상품 추가 */
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

  /** 상품 이미지 추가 */
  static addProductImage = async (productId: string, imageUrls: string[]) => {
    try {
      await Promise.all(
        imageUrls.map(async (imageUrl, index) => {
          let query = "INSERT INTO products_image(product_id, image_url) VALUES(?, ?)";
          let values = [productId, imageUrl];

          if (index === 0) {
            query = "INSERT INTO products_image(product_id, image_url, is_sumbnail) VALUES(?, ?, 1)";
            values = [productId, imageUrl];
          }

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

  /** 나의 상품 가져오기 */
  static myProducts = async (email: string) => {
    const query =
      "SELECT product_id, title, price, date_format(modified_at, '%Y-%m-%d %h:%i') as modified_at FROM products WHERE author=?";
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

  /** 나의 상품 이미지 가져오기 */
  static myProductsImage = async (productId: string) => {
    const query = "SELECT image_url, is_sumbnail FROM products_image WHERE product_id=? and is_sumbnail=1";
    const values = [productId];
    try {
      const [rows, fields]: [MyProductsImageReturns[], FieldPacket[]] = await connectionPool.execute(
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

  /** 상품 상세정보 가져오기 */
  static productInfo = async (productId: string) => {
    const query = "SELECT * FROM products WHERE product_id=?";
    const values = [productId];

    try {
      const [rows, fields]: [ProductInfoReturns[], FieldPacket[]] = await connectionPool.execute(
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

  /** 모든 상품 50개 가져오기 */
  static allProduct = async () => {
    const query = "SELECT product_id, title, price, modified_at FROM products ORDER BY modified_at LIMIT 50";

    try {
      const [rows, fields]: [AllProductReturns[], FieldPacket[]] = await connectionPool.execute(query);
      return rows;
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };

  /** 상품 수정하기 */
  static editProduct = async (productId: string, userDTO: EditProductData) => {
    const {
      title,
      categoryBig,
      categoryMedium,
      categorySmall,
      tradeArea,
      price,
      includeDeliveryCost,
      description,
      quantity,
      showCount,
      sellStatus,
    } = userDTO;

    const query =
      "UPDATE products SET title = ?, category_big = ?, category_medium = ?, category_small = ?, trade_area = ?, price = ?, include_delivery_cost = ?, description = ?, quantity = ?, show_count = ?, sell_status = ?, modified_at = now() WHERE product_id = ?";

    const values = [
      title,
      categoryBig,
      categoryMedium,
      categorySmall,
      tradeArea,
      price,
      includeDeliveryCost,
      description,
      quantity,
      showCount,
      sellStatus,
      productId,
    ];

    try {
      await connectionPool.execute(query, values);
    } catch (err: any) {
      throw {
        status: err.status,
        message: err.message,
      };
    }
  };

  /** 찜 목록 상품 추가 */
  static addLikeProduct = async (productId: string, email: string) => {
    const query = "INSERT INTO users_like_product(product_id, user_email) VALUES(?, ?)";
    const values = [productId, email];

    try {
      await connectionPool.execute(query, values);
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };

  /** 찜 목록 상품 삭제 */
  static deleteLikeProduct = async (productId: string, email: string) => {
    const query = "DELETE FROM users_like_product WHERE product_id=? and user_email=?";
    const values = [productId, email];

    try {
      await connectionPool.execute(query, values);
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };

  /** 이메일로 찜 목록 가져오기 */
  static getLikeProductByEmail = async (email: string) => {
    const query = "SELECT * FROM users_like_product WHERE user_email=?";
    const values = [email];

    try {
      const [rows, fields]: [any[], FieldPacket[]] = await connectionPool.execute(query, values);
      return rows;
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };

  /** 상품 ID로 찜 목록 가져오기 */
  static getLikeProductByProductId = async (productId: string) => {
    const query = "SELECT * FROM users_like_product WHERE product_id=?";
    const values = [productId];

    try {
      const [rows, fields]: [any[], FieldPacket[]] = await connectionPool.execute(query, values);
      return rows;
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };
}

export default ProductModel;
