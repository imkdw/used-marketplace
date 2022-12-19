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
  border: 1px solid #dbdbdb;
`;

const Category = () => {
  return (
    <FormControl>
      <Label>카테고리</Label>
      <StyledCategory></StyledCategory>
    </FormControl>
  );
};

export default Category;
