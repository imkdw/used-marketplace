import styled from "styled-components";
import BlackGlassIcon from "../../common/icons/BlackGlassIcon";
import Description from "./../addProduct/Description";

const StyledFilter = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0 40px 0;
`;

const InputWrapper = styled.div`
  width: 400px;
  height: 50px;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
  font-size: 16px;
`;

const Filter = () => {
  return (
    <StyledFilter>
      <InputWrapper>
        <Input type="text" placeholder="상품명을 입력해주세요." />
        <BlackGlassIcon />
      </InputWrapper>
    </StyledFilter>
  );
};

export default Filter;
