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

const StyledDescription = styled.div`
  width: 80%;
  height: auto;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  min-height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c3c2cc;
`;

const TextArea = styled.textarea`
  width: 97%;
  min-height: 140px;
  resize: none;
  border: none;
  font-size: 16px;
  outline: none;
`;

const Description = () => {
  return (
    <FormControl>
      <Label>설명</Label>
      <StyledDescription>
        <TextAreaWrapper>
          <TextArea placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)" />
        </TextAreaWrapper>
      </StyledDescription>
    </FormControl>
  );
};

export default Description;
