import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { addProductDataState } from "../../../recoil/product.recoil";

const FormControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 40px 0 40px 0;
`;

const Label = styled.label`
  width: 15%;
  height: 100%;
  font-size: 18px;
`;

const StyledCategory = styled.div`
  width: 80%;
  height: 300px;
  border: 1px solid #c3c2cc;
  display: flex;
`;

const CategoryWrapper = styled.ul`
  width: 33.3%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryItem = styled.li`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f4f4fa;
  }
`;

const CategoryItemText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SelectCategory = styled.div`
  color: red;
  font-size: 16px;
`;

const Category = () => {
  const [addProductData, setAddProductData] = useRecoilState(addProductDataState);

  // setAddProductData((prevState) => {
  //   return {
  //     ...prevState,
  //     category: {
  //       big: "의류",
  //       medium: "남자옷",
  //       small: "정장",
  //     },
  //   };
  // });

  return (
    <FormControl>
      <Label>카테고리</Label>
      <StyledCategory>
        <CategoryWrapper>
          <CategoryItem>
            <CategoryItemText>의류</CategoryItemText>
          </CategoryItem>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryItem>
            <CategoryItemText>남자옷</CategoryItemText>
          </CategoryItem>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryItem>
            <CategoryItemText>셔츠</CategoryItemText>
          </CategoryItem>
          <CategoryItem>
            <CategoryItemText>언더웨어</CategoryItemText>
          </CategoryItem>
          <CategoryItem>
            <CategoryItemText>정장</CategoryItemText>
          </CategoryItem>
          <CategoryItem>
            <CategoryItemText>기타</CategoryItemText>
          </CategoryItem>
        </CategoryWrapper>
      </StyledCategory>
    </FormControl>
  );
};

export default Category;
