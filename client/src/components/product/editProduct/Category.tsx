import { useRecoilState } from "recoil";
import styled from "styled-components";
import { addProductDataState } from "../../../recoil/product.recoil";

const StyledCategoryWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  padding: 40px 0 40px 0;
  gap: 20px;
`;

const FormControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
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
  margin-left: 20%;
`;

const Category = () => {
  const [addProductData, setAddProductData] = useRecoilState(addProductDataState);
  const { big, medium, small } = addProductData.category;

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
    <StyledCategoryWrapper>
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
      <SelectCategory>
        선택한 카테고리 :{" "}
        <b style={{ fontWeight: "bold", color: "red" }}>
          {big} &gt; {medium} &gt; {small}
        </b>
      </SelectCategory>
    </StyledCategoryWrapper>
  );
};

export default Category;
