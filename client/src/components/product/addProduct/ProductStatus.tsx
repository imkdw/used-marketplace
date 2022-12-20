import styled from "styled-components";

/** MUI */
import Radio from "@mui/material/Radio";

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

const StyledProductStatus = styled.div`
  width: 80%;
  height: 32px;
  display: flex;
  gap: 20px;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioLabel = styled.label`
  font-size: 16px;
`;

const ProductStatus = () => {
  return (
    <FormControl>
      <Label>상태</Label>
      <StyledProductStatus>
        <RadioWrapper>
          <Radio color="secondary" />
          <RadioLabel>중고상품</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio color="secondary" />
          <RadioLabel>새상품</RadioLabel>
        </RadioWrapper>
      </StyledProductStatus>
    </FormControl>
  );
};

export default ProductStatus;
