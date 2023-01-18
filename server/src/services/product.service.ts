import { AddProductData, ProductInfoReturns, UploadImage } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";
import FirebaseStorage from "../firebase/firebaseStorage";
import snakeToCamel from "../modules/snakeToCamel";

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

      /** 나의 상품 첫번쨰 이미지 조회 */
      const productsImage = await Promise.all(
        myProducts.map(async (product, index) => {
          const productId = product.product_id;
          const imageUrls = await ProductModel.myProductsImage(productId);
          return imageUrls[0];
        })
      );

      const myProductsData = myProducts.map((myProduct, index) => {
        return { ...myProduct, sumbnail: productsImage[index].image_url };
      });

      return myProductsData;
    } catch (err: any) {
      throw err;
    }
  };

  static productInfo = async (productId: string): Promise<ProductInfoReturns> => {
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
        status: err.status,
        message: err.message,
      };
    }
  };

  static editProduct = async () => {};
}

export default ProductService;
