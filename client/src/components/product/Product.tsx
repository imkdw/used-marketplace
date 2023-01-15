import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState } from "../../recoil/product.recoil";
import AddProduct from "./addProduct/AddProduct";
import ProductTab from "./ProductTab";
import ManageProduct from "./manageProduct/ManageProduct";
import DaumPostcode from "./addProduct/DaumPostcode";
import { useLocation } from "react-router";

const StyledProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const getCurrentUrl = (pathname: string) => {
  const sortaionUrlArray = pathname.split("/");
  const sortationUrl = sortaionUrlArray[sortaionUrlArray.length - 1];

  return sortationUrl;
};

const Product = () => {
  const location = useLocation();
  const currentUrl = getCurrentUrl(location.pathname);

  const enableDaumPostcode = useRecoilValue(enableDaumPostcodeState);

  return (
    <StyledProduct>
      {enableDaumPostcode && <DaumPostcode />}
      <ProductTab />
      {currentUrl === "new" && <AddProduct />}
      {currentUrl === "manage" && <ManageProduct />}
    </StyledProduct>
  );
};

export default Product;
