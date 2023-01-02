import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState, enableProductTabState } from "../../recoil/product.recoil";
import Header from "../header/Header";
import TopHeader from "../topHeader/TopHeader";
import AddProduct from "./addProduct/AddProduct";
import DaumPostcode from "./addProduct/DaumPostCode";
import ProductTab from "./ProductTab";

const StyledProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Product = () => {
  const enableProductTab = useRecoilValue(enableProductTabState);
  const enableDaumPostcode = useRecoilValue(enableDaumPostcodeState);

  return (
    <StyledProduct>
      {enableDaumPostcode && <DaumPostcode />}
      <TopHeader />
      <Header />
      <ProductTab />
      {enableProductTab === "add" && <AddProduct />}
    </StyledProduct>
  );
};

export default Product;
