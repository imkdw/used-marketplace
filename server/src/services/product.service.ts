import { AddProductData } from "./../types/product.d";
import ProductModel from "./../models/product.model";
import Secure from "./../utils/secure";

class ProductService {
  static addProduct = async (userDTO: AddProductData) => {
    const productId = Secure.getUUID();
    userDTO.productId = productId;

    try {
      await ProductModel.addProduct(userDTO);
    } catch (err: any) {
      throw err;
    }
  };
}

export default ProductService;
