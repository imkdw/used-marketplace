import styled from "styled-components";
import AddProduct from "./addProduct/AddProduct";
import ProductTab from "./ProductTab";
import ManageProduct from "./manageProduct/ManageProduct";
import { useLocation } from "react-router";
import EditProduct from "./editProduct/EditProduct";

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
  const isEdit = location.pathname.includes("edit");

  return (
    <StyledProduct>
      <ProductTab />
      {currentUrl === "new" && <AddProduct />}
      {currentUrl === "manage" && <ManageProduct />}
      {isEdit && <EditProduct />}
    </StyledProduct>
  );
};

export default Product;
