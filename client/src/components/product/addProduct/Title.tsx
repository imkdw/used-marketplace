import { useRecoilState } from "recoil";
import styled from "styled-components";
import { addProductDataState } from "../../../recoil/product.recoil";
import { ChangeEvent } from "react";

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
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div<{ borderColor?: string }>`
  width: 90%;
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => props.borderColor || "#c3c2cc"};
`;

const Input = styled.input`
  width: 95%;
  height: 100%;
`;

const TitleCounter = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Title = () => {
  const [addProductData, setAddProductData] = useRecoilState(addProductDataState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setAddProductData({
      ...addProductData,
      title: value,
    });
  };

  return (
    <FormControl>
      <Label>제목</Label>
      <StyledTitle>
        {String(addProductData.title).length <= 40 ? (
          <InputWrapper>
            <Input
              type="text"
              placeholder="상품 제목을 입력해주세요."
              onChange={changeHandler}
              value={addProductData.title}
            />
          </InputWrapper>
        ) : (
          <InputWrapper borderColor="red">
            <Input
              type="text"
              placeholder="상품 제목을 입력해주세요."
              onChange={changeHandler}
              value={addProductData.title}
            />
          </InputWrapper>
        )}
        <TitleCounter>{addProductData.title.length}/40</TitleCounter>
      </StyledTitle>
    </FormControl>
  );
};

export default Title;
