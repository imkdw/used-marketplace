import { Request, Response, NextFunction } from "express";
import ProductService from "./../services/product.service";
import { AddProductData, EditProductData, UploadImage } from "./../types/product.d";

export default class ProductController {
  static addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO: AddProductData = JSON.parse(req.body.addProductData);
    const images: UploadImage[] = JSON.parse(JSON.stringify(req.files)).image;

    try {
      const author = res.locals.email;
      await ProductService.addProduct(userDTO, images, author);
      res.status(201).json({ message: "상품 등록 성공" });
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static myProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = res.locals.email;
      const products = await ProductService.myProducts(email);
      res.status(200).json(products);
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static productInfo = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;
    const accessToken = req.headers.authorization;

    try {
      const product = await ProductService.productInfo(productId, accessToken);
      res.status(200).json(product);
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static allProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductService.allProduct();
      res.status(200).json(products);
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static editProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;
    const userDTO: EditProductData = req.body;

    try {
      await ProductService.editProduct(productId, userDTO);
      res.status(201).json();
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static likeProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.body;

    try {
      const likeProduct = await ProductService.likeProduct(productId, res.locals.email);
      res.status(201).json({ message: likeProduct });
    } catch (err: any) {
      console.error(err.message);
      res.status(err.status || 500).json({ message: err.message });
    }
  };
}
