import { Request, Response, NextFunction } from "express";
import { AddProductData } from "../types/product";

/**
 * 에러를 반환하기 위한 함수
 * @param statusCode {number} HTTP 상태 코드
 * @param message {string} JSON 내부에 반환될 메세지
 */
const responseError = (res: Response, statusCode: number, message: string) => {
  res.status(statusCode).json({ message });
  return;
};

class ProductValidator {
  static addProduct = (req: Request, res: Response, next: NextFunction) => {
    const userDTO: AddProductData = JSON.parse(req.body.addProductData);

    const { title, category, tradeArea, description } = userDTO;
    /** 상품의 제목은 0~40자 까지 입력가능 */
    if (title.length === 0 || title.length >= 40) {
      alert("상품 제목은 0 ~ 40자 사이로 입력해주세요.");
      responseError(res, 400, "");
    }

    /** 카테고리는 필수 입력사항 */
    const { big, medium, small } = category;
    if (big.length === 0 || medium.length === 0 || small.length === 0) {
      alert("카테고리는 대/중/소분류 모두 선택해주세요.");
      responseError(res, 400, "");
    }

    /** 거래지역은 아무거나 선택 필요 */
    if (tradeArea.length === 0) {
      alert("거래지역을 입력해주세요.");
      responseError(res, 400, "");
    }

    /** 상품 설명은 10 ~ 2000글자 사이로 입력필요 */
    if (description.length === 0 || description.length < 10) {
      alert("상품 설명은 10 ~ 2000글자 사이로 입력해주세요");
      responseError(res, 400, "");
    }

    next();
  };
}

export default ProductValidator;
