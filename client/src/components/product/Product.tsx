import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableProductTabState } from "../../recoil/product.recoil";
import Header from "../header/Header";
import TopHeader from "../topHeader/TopHeader";
import AddProduct from "./AddProduct";
import ProductTab from "./ProductTab";

const StyledProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Product = () => {
  const enableProductTab = useRecoilValue(enableProductTabState);
  return (
    <StyledProduct>
      <TopHeader />
      <Header />
      <ProductTab />
      {enableProductTab === "add" && <AddProduct />}
    </StyledProduct>
  );
};

export default Product;
