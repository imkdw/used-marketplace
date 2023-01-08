import { AddProductData, UploadImage } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";
import FirebaseStorage from "../firebase/firebaseStorage";

class ProductService {
  // TODO: images 타입 변경
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
}

export default ProductService;
