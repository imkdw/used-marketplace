import { Request, Response, NextFunction } from "express";
import ProductModel from "./../models/product.model";
import ProductService from "./../services/product.service";
import { AddProductData } from "./../types/product.d";

export default class ProductController {
  static addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: AddProductData = JSON.parse(req.body.addProductData);
    const images = req.files;

    /** Firebase Storage 이미지 업로드 구현 */
    /** 게시글 DB CRUD 구현 */
    try {
      await ProductService.addProduct(userDTO);
      res.status(200).json({ message: "상품 등록 성공" });
    } catch (err: any) {
      res.status(err.status).json({ message: err.message });
    }
  };
}
