import styled from "styled-components";

const FormControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0 40px 0;
`;

const Label = styled.label`
  width: 15%;
  height: 100%;
  font-size: 18px;
`;

const StyledQuantity = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const InputWrapper = styled.div`
  width: 240px;
  height: 50px;
  border: 1px solid #c3c2cc;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 95%;
  height: 100%;
`;

const Quantity = () => {
  return (
    <FormControl>
      <Label>수량</Label>
      <StyledQuantity>
        <InputWrapper>
          <Input defaultValue={1} />
        </InputWrapper>
        <div style={{ fontSize: "18px" }}>개</div>
      </StyledQuantity>
    </FormControl>
  );
};

export default Quantity;
