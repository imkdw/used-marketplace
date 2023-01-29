import { AddProductData, EditProductData, ProductInfoReturns, UploadImage } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";
import FirebaseStorage from "../firebase/firebaseStorage";
import snakeToCamel from "../modules/snakeToCamel";
import Jwt from "../utils/jwt";

class ProductService {
  static addProduct = async (userDTO: AddProductData, images: UploadImage[], author: string) => {
    const productId = Secure.getUUID();
    userDTO.productId = productId;
    userDTO.author = author;

    try {
      /** 1. 상품 데이터 추가 */
      await ProductModel.addProduct(userDTO);

      /** 2. 상품 이미지 업로드 및 URL 가져오기 */
      const imageUrls = await FirebaseStorage.uploadImageAndGetUrl(userDTO.productId, images);

      /** 3. 상품 이미지 URL을 저장 */
      await ProductModel.addProductImage(productId, imageUrls);
    } catch (err: any) {
      throw err;
    }
  };

  static myProducts = async (email: string) => {
    try {
      /** 나의 상품 조회 */
      const myProducts = await ProductModel.myProducts(email);

      /** 나의 상품 썸네일 URL 조회 */
      const productsImage = await Promise.all(
        myProducts.map(async (product, index) => {
          const imageUrls = await ProductModel.myProductsImage(product.product_id);
          return imageUrls[0].image_url;
        })
      );

      const myProductsData = await Promise.all(
        myProducts.map(async (product, index) => {
          const tempProduct: any = {};

          for (const item in product) {
            const key = snakeToCamel(item);
            tempProduct[key] = product[item];
          }

          const productLikeCount = await ProductModel.getLikeProductByProductId(product.product_id);
          tempProduct.likeCount = productLikeCount.length;

          return { ...tempProduct, sumbnail: productsImage[index] };
        })
      );

      return myProductsData;
    } catch (err: any) {
      throw err;
    }
  };

  static productInfo = async (
    productId: string,
    accessToken: string | undefined
  ): Promise<ProductInfoReturns> => {
    try {
      /** 상품 정보 조회 */
      const productInfo = await ProductModel.productInfo(productId);

      /** 상품 이미지 조회 */
      const productImages = await ProductModel.myProductsImage(productId);

      /** 상품 이미지를 추가하여 데이터 반환 */
      const productInfoData = await Promise.all(
        productInfo.map((product) => {
          const tempProduct: any = {};

          /** DB에서 반환된 snake_case를 camelCase로 변환 */
          for (const item in product) {
            const key = snakeToCamel(item);
            tempProduct[key] = product[item];
          }

          return {
            ...tempProduct,
            images: productImages.map((image) => image.image_url),
          };
        })
      );

      /** 로그인된 유저가 조회한 경우 기존 찜 여부 확인 */
      if (accessToken?.split(" ").length === 2) {
        const isValidtoken = Jwt.verifyToken(accessToken?.split(" ")[1]);

        /** 유효한 토큰인지 확인 */
        if (isValidtoken) {
          const decodedToken = Jwt.decodeToken(accessToken?.split(" ")[1]);
          const usersLikeProduct = await ProductModel.getLikeProductByEmail(decodedToken.email);
          const isExistLikeProduct =
            usersLikeProduct.filter((product) => product.product_id === productId).length === 1;

          if (isExistLikeProduct) {
            productInfoData[0].isLikeProduct = true;
          }
        }
      } else {
        productInfoData[0].isLikeProduct = false;
      }

      /** 상품 찜하기 갯수 카운트 */
      const productLikeCount = await ProductModel.getLikeProductByProductId(productId);
      productInfoData[0].likeCount = productLikeCount.length;

      return productInfoData[0];
    } catch (err: any) {
      throw err;
    }
  };

  static allProduct = async () => {
    try {
      const products = await ProductModel.allProduct();

      const sumbnail = await Promise.all(
        products.map(async (product) => {
          return await ProductModel.myProductsImage(product.product_id);
        })
      );

      const productsData = await Promise.all(
        products.map(async (product, index) => {
          const tempProduct: any = {};

          /** DB에서 반환된 snake_case를 camelCase로 변환 */
          for (const item in product) {
            const key = snakeToCamel(item);
            tempProduct[key] = product[item];
          }

          return { ...tempProduct, image: sumbnail[index][0].image_url };
        })
      );

      return productsData;
    } catch (err: any) {
      throw {
        status: err.status || 500,
        message: err.message,
      };
    }
  };

  static editProduct = async (productId: string, userDTO: EditProductData) => {
    try {
      await ProductModel.editProduct(productId, userDTO);
    } catch (err: any) {
      throw err;
    }
  };

  static likeProduct = async (productId: string, email: string) => {
    const existLikeProduct = await ProductModel.getLikeProductByEmail(email); // 이미 존재하는 찜 목록
    const isNotExistProduct =
      existLikeProduct.filter((product) => product.product_id === productId).length === 0;

    /** 기존 찜 목록에 저장되어있지 않은 상품 -> 찜 목록에 추가 */
    if (isNotExistProduct) {
      try {
        await ProductModel.addLikeProduct(productId, email);
        return "add";
      } catch (err: any) {
        throw err;
      }
    }

    /** 기존 찜 목록에 저장된 상품 -> 찜 목록에서 삭제 */
    try {
      await ProductModel.deleteLikeProduct(productId, email);
      return "delete";
    } catch (err: any) {
      throw err;
    }
  };
}

export default ProductService;
