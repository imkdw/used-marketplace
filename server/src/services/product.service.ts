import { AddProductData, UploadImage } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";
import FirebaseStorage from "../firebase/firebaseStorage";

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
      )

      const myProductsData = myProducts.map((myProduct, index) => {
        return {...myProduct, sumbnail: productsImage[index].image_url};
      });

      return myProductsData;
    } catch (err: any) {
      throw err;
    }
  };
}

export default ProductService;
