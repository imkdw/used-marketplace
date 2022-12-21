import styled from "styled-components";
import Category from "./Category";
import Description from "./Description";
import ImageUpload from "./ImageUpload";
import Price from "./Price";
import ProductStatus from "./ProductStatus";
import ProductTradeable from "./ProductTradeable";
import Quantity from "./Quantity";
import Title from "./Title";
import TradeArea from "./TradeArea";

const StyledAddProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductForm = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
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

const AddProduct = () => {
  return (
    <StyledAddProduct>
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
