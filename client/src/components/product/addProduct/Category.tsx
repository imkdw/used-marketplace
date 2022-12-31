import styled from "styled-components";

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

const Category = () => {
  const categoryData = [
    {
      의류: {
        남자옷: {
          a: "셔츠",
          b: "언더웨어",
          c: "정장",
          d: "기타",
        },
        여자옷: {
          a: "블라우스",
          b: "원피스",
          c: "치마",
          d: "기타",
        },
      },
    },
    {
      전자제품: {
        컴퓨터: {
          a: "그래픽카드",
          b: "메인보드",
          c: "CPU",
          d: "기타",
        },
        모바일: {
          a: "스마트폰",
          b: "이어폰",
          c: "태블릿",
          d: "기타",
        },
      },
    },
    {
      기타: {
        기타: {
          a: "기타",
        },
      },
    },
  ];

  return (
    <FormControl>
      <Label>카테고리</Label>
      <StyledCategory>
        <CategoryWrapper>
          {/* <CategoryItem>
            <CategoryItemText>여성의류</CategoryItemText>
          </CategoryItem> */}
          {categoryData.map((data) => {
            const key = Object.keys(data);
            return <div>{key}</div>;
          })}
        </CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
      </StyledCategory>
    </FormControl>
  );
};

export default Category;
