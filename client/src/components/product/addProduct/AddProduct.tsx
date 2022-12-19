import styled from "styled-components";
import Category from "./Category";
import ImageUpload from "./ImageUpload";
import Title from "./Title";

const StyledAddProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ProductForm = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid;
  font-size: 26px;
`;

const AddProduct = () => {
  return (
    <StyledAddProduct>
      <ProductForm>
        <FormHeader>기본정보</FormHeader>
        <ImageUpload />
        <Title />
        <Category />
      </ProductForm>
    </StyledAddProduct>
  );
};

export default AddProduct;
