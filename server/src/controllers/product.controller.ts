import { Request, Response, NextFunction } from "express";
import ProductService from "./../services/product.service";
import { AddProductData, UploadImage } from "./../types/product.d";

export default class ProductController {
  static addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: AddProductData = JSON.parse(req.body.addProductData);
    const images: UploadImage[] = JSON.parse(JSON.stringify(req.files)).image;

    try {
      const author = res.locals.email;
      await ProductService.addProduct(userDTO, images, author);
      res.status(200).json({ message: "상품 등록 성공" });
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };
}
