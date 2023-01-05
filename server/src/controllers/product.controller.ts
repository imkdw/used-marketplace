import { Request, Response, NextFunction } from "express";
import ProductModel from "./../models/product.model";
import ProductService from "./../services/product.service";
import { AddProductData } from "./../types/product.d";

export default class ProductController {
  static addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: AddProductData = JSON.parse(req.body.addProductData);
    const images = req.files;

    try {
      await ProductService.addProduct(userDTO, images);
      res.status(200).json({ message: "상품 등록 성공" });
    } catch (err: any) {
      console.log(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };
}
