import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { editProductDataState } from "../../../recoil/product.recoil";

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

const ProductTradeable = () => {
  const [editProductData, setEditProductData] = useRecoilState(editProductDataState);

  const tradeableChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setEditProductData((prevState) => {
      return { ...prevState, tradeable: value === "can" ? true : false };
    });
  };

  return (
    <FormControl>
      <Label>교환</Label>
      <StyledProductTradeable>
        <RadioWrapper>
          <Radio
            type="radio"
            name="tradeable"
            value="can"
            id="can"
            onChange={tradeableChangeHandler}
            checked={editProductData.tradeable}
          />
          <RadioLabel htmlFor="can">교환가능</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio
            type="radio"
            name="tradeable"
            value="cant"
            id="cant"
            onChange={tradeableChangeHandler}
            checked={!editProductData.tradeable}
          />
          <RadioLabel htmlFor="cant">교환불가</RadioLabel>
        </RadioWrapper>
      </StyledProductTradeable>
    </FormControl>
  );
};

export default ProductTradeable;
