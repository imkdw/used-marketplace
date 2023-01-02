import { Request, Response, NextFunction } from "express";

export default class ProductController {
  static addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = JSON.parse(req.body.addProductData);
    const images = req.files;
    console.log(userDTO);
  };
}
