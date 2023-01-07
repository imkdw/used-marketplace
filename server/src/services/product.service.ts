import { AddProductData } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";
import FirebaseStorage from "../firebase/firebaseStorage";

class ProductService {
  // TODO: images 타입 변경
  static addProduct = async (userDTO: AddProductData, images: any) => {
    const productId = Secure.getUUID();
    userDTO.productId = productId;

    try {
      /** 상품 추가 */
      await ProductModel.addProduct(userDTO);

      /** 상품 이미지 업로드 */
      await FirebaseStorage.uploadImage(userDTO.productId, images);
    } catch (err: any) {
      throw err;
    }
  };
}

export default ProductService;
