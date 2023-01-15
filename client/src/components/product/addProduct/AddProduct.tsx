import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { productUrl } from "../../../config/url";
import { addProductDataState, addProductImageState } from "../../../recoil/product.recoil";
import { AddProductData, AddProductImage } from "../../../types/product";
import Category from "./Category";
import Description from "./Description";
import ImageUpload from "./ImageUpload";
import Price from "./Price";
import ProductStatus from "./quality";
import ProductTradeable from "./ProductTradeable";
import Quantity from "./Quantity";
import Title from "./Title";
import TradeArea from "./TradeArea";
import { loginUserState } from "../../../recoil/auth.recoil";
import { useNavigate } from "react-router-dom";

const StyledAddProduct = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductForm = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const FormHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid;
  font-size: 26px;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  height: 88px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #c3c2cc;
  border-bottom: 1px solid #c3c2cc;
  background-color: #fafafd;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SubmitButton = styled.button`
  width: 160px;
  height: 56px;
  background-color: #ff5058;
  font-size: 20px;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
`;

/**
 * 상품 추가 폼데이터 유효성체크
 * @param addProductData {AddProductData} 상품 추가 폼데이터
 * @returns {boolean} 검증 실패시 false, 성공시 true
 */
const checkValidAddProductData = (addProductData: AddProductData): boolean => {
  const { title, category, tradeArea, description } = addProductData;
  /** 상품의 제목은 0~40자 까지 입력가능 */
  if (title.length === 0 || title.length >= 40) {
    alert("상품 제목은 0 ~ 40자 사이로 입력해주세요.");
    return false;
  }

  /** 카테고리는 필수 입력사항 */
  const { big, medium, small } = category;
  if (big.length === 0 || medium.length === 0 || small.length === 0) {
    alert("카테고리는 대/중/소분류 모두 선택해주세요.");
    return false;
  }

  /** 거래지역은 아무거나 선택 필요 */
  if (tradeArea.length === 0) {
    alert("거래지역을 입력해주세요.");
    return false;
  }

  /** 상품 설명은 10 ~ 2000글자 사이로 입력필요 */
  if (description.length === 0 || description.length < 10) {
    alert("상품 설명은 10 ~ 2000글자 사이로 입력해주세요");
    return false;
  }

  return true;
};

/**
 * 상품 추가 이미지 유효성체크
 * @param addProductImage {AddProductImage[]} 상품 추가 이미지 데이터
 * @returns {boolean} 검증 실패시 false, 성공시 true
 */
const checkValidAddProductImage = (addProductImage: AddProductImage[]): boolean => {
  if (addProductImage.length === 0) {
    alert("상품 이미지는 한장이상 첨부해주세요");
    return false;
  }

  if (addProductImage.length >= 9) {
    alert("상품 이미지는 최대 8장까지 첨부가 가능합니다");
    return false;
  }

  return true;
};

const AddProduct = () => {
  const [addProductData, setAddProductData] = useRecoilState(addProductDataState);
  const [addProductImage, setAddProductImage] = useRecoilState(addProductImageState);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);

  const navigator = useNavigate();

  useEffect(() => {
    /** 로그인 여부 체크 */
    const checkLoginUser = () => {
      if (loginUser.accessToken.length === 0) {
        alert("로그인이 필요한 기능입니다.");
        navigator("/login");
        return;
      }
    };

    checkLoginUser();
  }, [loginUser]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /** 상품 추가 폼데이터 및 이미지 유효성체크 */
    const isValidAddProductData = checkValidAddProductData(addProductData);
    const isValiAddProductImage = checkValidAddProductImage(addProductImage);

    /** 데이터가 유효할경우 서버측으로 상품추가 요청 */
    if (isValidAddProductData && isValiAddProductImage) {
      const formData = new FormData(event.currentTarget);
      formData.append("addProductData", JSON.stringify(addProductData));

      for (let i = 0; i < addProductImage.length; i++) {
        formData.append("image", addProductImage[i].image);
      }

      try {
        const res = await axios.post(productUrl.addProduct, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${loginUser.accessToken}`,
          },
        });

        if (res.status === 200) {
          alert("상품 등록이 완료되었습니다.");
          setAddProductData({
            title: "",
            category: {
              big: "의류",
              medium: "남자옷",
              small: "정장",
            },
            tradeArea: "",
            quality: "old",
            tradeable: false,
            price: 0,
            isIncludeDeliveryCost: false,
            description: "",
            quantity: 1,
          });
          setAddProductImage([]);
          navigator("/");
        }
      } catch (err: any) {
        alert("서버 오류입니다. 다시 시도해주세요.");
        console.log(err);
      }
    }
  };

  return (
    <StyledAddProduct encType="multipart/form-data" onSubmit={submitHandler} acceptCharset="UTF-8">
      <ProductForm>
        <FormHeader>기본정보</FormHeader>
        <ImageUpload />
        <Title />
        <Category />
        <TradeArea />
        <ProductStatus />
        <ProductTradeable />
        <Price />
        <Description />
        <Quantity />
      </ProductForm>
      <SubmitButtonWrapper>
        <SubmitButton type="submit">등록하기</SubmitButton>
      </SubmitButtonWrapper>
    </StyledAddProduct>
  );
};

export default AddProduct;
