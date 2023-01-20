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
  /**
   * 신규상품 추가
   * @param userDTO {AddProductData} 클라이언트에서 받은 상품추가 데이터
   */
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

  /**
   * 신규상품 추가시 이미지 업로드
   * @param productId {string} 상품 ID
   * @param imageUrls {string[]} 업로드된 상품 이미지의 URL
   */
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

  /**
   * 나의 상품 조회
   * @param {string} email  이메일
   * @returns {MyProductsReturns[]} 상품 조회 데이터
   */
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

  /**
   * 나의 상품 이미지 조회
   * @param {string} productId - 상품 ID
   * @returns {MyProductsImageReturns[]} 나의 상품 이미지 URL
   */
  static myProductsImage = async (productId: string) => {
    const query = "SELECT image_url FROM products_image WHERE product_id=?";
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

  /**
   * 상품 상세정보 확인
   * @param {string} productId - 상품 ID
   * @returns {} - 상품 상세정보 데이터
   */
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

  /**
   * 메인화면에 표시되는 오늘의 상품 추천(50개)
   * @returns {} - 상품 리스트
   */
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

  /**
   * 상품 수정
   */
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
      likeCount,
      showCount,
      createdAt,
      modifiedAt,
      sellStatus,
    } = userDTO;

    const query =
      "UPDATE products SET\
      title = ?\
      category_big = ?\
      category_medium = ?\
      category_small = ?\
      trade_area = ?\
      price = ?\
      include_delivery_cost = ?\
      description = ?\
      quantity = ?\
      like_count = ?\
      show_count = ?\
      created_at = ?\
      modified_at = ?\
      sell_status = ?\
      WHERE product_id = ?\
      ";

    const values = [
      title,
      categoryBig,
      categorySmall,
      categorySmall,
      tradeArea,
      price,
      includeDeliveryCost,
      description,
      quantity,
      likeCount,
      showCount,
      createdAt,
      modifiedAt,
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
}

export default ProductModel;
