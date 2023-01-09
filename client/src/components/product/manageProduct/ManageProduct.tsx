import styled from "styled-components";
import Filter from "./Filter";
import MyProduct from "./MyProduct";
import axios from "axios";

const StyledManageProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ManageProduct = () => {
  return (
    <StyledManageProduct>
      <Filter />
      <MyProduct />
    </StyledManageProduct>
  );
};

export default ManageProduct;
