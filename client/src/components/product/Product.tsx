import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState, enableProductTabState } from "../../recoil/product.recoil";
import Header from "../header/Header";
import TopHeader from "../topHeader/TopHeader";
import AddProduct from "./addProduct/AddProduct";
import DaumPostcode from "./addProduct/DaumPostCode";
import ProductTab from "./ProductTab";
import ManageProduct from "./manageProduct/ManageProduct";

const StyledProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div``;

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
      {enableProductTab === "manage" && <ManageProduct />}
    </StyledProduct>
  );
};

export default Product;
