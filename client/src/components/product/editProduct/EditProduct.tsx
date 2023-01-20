import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { productUrl } from "../../../config/url";
import { editProductDataState } from "../../../recoil/product.recoil";
import { EditProductData } from "../../../types/product";
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
import { useNavigate, useParams } from "react-router-dom";

const StyledEditProduct = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductForm = styled.div`
  width: 100%;
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

const checkValidEditProductData = (editProductData: EditProductData): boolean => {
  const { title, categoryBig, categoryMedium, categorySmall, tradeArea, description } = editProductData;
  /** 상품의 제목은 0~40자 까지 입력가능 */
  if (title.length === 0 || title.length >= 40) {
    alert("상품 제목은 0 ~ 40자 사이로 입력해주세요.");
    return false;
  }

  /** 카테고리는 필수 입력사항 */
  if (categoryBig.length === 0 || categoryMedium.length === 0 || categorySmall.length === 0) {
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

const EditProduct = () => {
  const [editProductData, setEditProductData] = useRecoilState(editProductDataState);
  const loginUser = useRecoilValue(loginUserState);
  const navigator = useNavigate();

  /** 상품id 가져오기 */
  const productId = useParams().productId;

  useEffect(() => {
    /** 로그인 여부 체크 */
    const checkLoginUser = () => {
      if (loginUser.accessToken.length === 0) {
        alert("로그인이 필요한 기능입니다.");
        navigator("/login");
        return;
      }
    };

    /** 기존 데이터 불러오기 */
    const getProductData = async () => {
      const res = await axios.get(`${productUrl.productInfo}/${productId}`);
      setEditProductData(res.data);
    };

    checkLoginUser();
    getProductData();
  }, [loginUser, setEditProductData, navigator, productId]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /** 상품 수정 폼데이터 및 이미지 유효성체크 */
    const isValidEditProductData = checkValidEditProductData(editProductData);

    /** 데이터가 유효할경우 서버측으로 상품수정 요청 */
    if (isValidEditProductData) {
      try {
        const res = await axios.put(`${productUrl.editProduct}/${productId}`, editProductData, {
          headers: {
            Authorization: `Bearer ${loginUser.accessToken}`,
          },
        });

        if (res.status === 200) {
          alert("상품 등록이 완료되었습니다.");
          navigator("/");
        }
      } catch (err: any) {
        const { status, data } = err.response;
        console.log(err);
        if (status === 401) {
          if (data.message === "jwt_expired") {
            alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
            navigator("/login");
            return;
          }
        }

        if (status === 500) {
          alert("서버 오류입니다. 다시 시도해주세요.");
          navigator("/");
        }
      }
    }
  };

  return (
    <StyledEditProduct onSubmit={submitHandler}>
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
        <SubmitButton type="submit">수정하기</SubmitButton>
      </SubmitButtonWrapper>
    </StyledEditProduct>
  );
};

export default EditProduct;
