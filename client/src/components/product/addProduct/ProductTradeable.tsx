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

const StyledProductTradeable = styled.div`
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

const ProductTradeable = () => {
  return (
    <FormControl>
      <Label>교환</Label>
      <StyledProductTradeable>
        <RadioWrapper>
          <Radio color="secondary" />
          <RadioLabel>교환가능</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio color="secondary" />
          <RadioLabel>교환불가</RadioLabel>
        </RadioWrapper>
      </StyledProductTradeable>
    </FormControl>
  );
};

export default ProductTradeable;
