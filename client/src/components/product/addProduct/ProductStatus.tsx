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
  gap: 10px;
`;

const RadioLabel = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Radio = styled.input`
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;

  &:checked {
    border: 0.4em solid tomato;
  }
`;

const ProductStatus = () => {
  return (
    <FormControl>
      <Label>상태</Label>
      <StyledProductStatus>
        <RadioWrapper>
          <Radio type="radio" name="status" value="old" checked id="old" />
          <RadioLabel htmlFor="old">중고상품</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio type="radio" name="status" value="new" id="new" />
          <RadioLabel htmlFor="new">새상품</RadioLabel>
        </RadioWrapper>
      </StyledProductStatus>
    </FormControl>
  );
};

export default ProductStatus;
