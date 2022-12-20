import styled from "styled-components";

/** MUI */
import Checkbox from "@mui/material/Checkbox";

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

const StyledPrice = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PriceInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const InputWrapper = styled.div`
  width: 240px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c3c2cc;
`;

const PriceInput = styled.input`
  width: 90%;
  height: 100%;
  background-color: transparent;
`;

const CheckboxWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;

const Price = () => {
  return (
    <FormControl>
      <Label>가격</Label>
      <StyledPrice>
        <PriceInputWrapper>
          <InputWrapper>
            <PriceInput placeholder="숫자만 입력해주세요." />
          </InputWrapper>
          <div style={{ fontSize: "18px" }}>원</div>
        </PriceInputWrapper>
        <CheckboxWrapper>
          <Checkbox defaultChecked />
          <label>배송비 포함</label>
        </CheckboxWrapper>
      </StyledPrice>
    </FormControl>
  );
};

export default Price;
