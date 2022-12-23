import { useState } from "react";
import styled from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";

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

const StyledTradeArea = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddressButtons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 20px;
`;

const AddressButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #c3c2cc;
  font-size: 15px;
`;

const AddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f4fa;
  height: 50px;
  border: 1px solid #c3c2cc;
`;

const Address = styled.input`
  width: 95%;
  font-size: 16px;
  background-color: transparent;
`;

const TradeArea = () => {
  const [area, setArea] = useState("");
  const [enablePostCode, setEnablePostCode] = useState(false);

  const noAreaHandler = () => {
    setArea("지역설정안함");
  };

  return (
    <FormControl>
      <Label>거래지역</Label>
      <StyledTradeArea>
        <AddressButtons>
          <AddressButton>내 위치</AddressButton>
          <AddressButton>최근 지역</AddressButton>
          <AddressButton>주소 검색</AddressButton>
          <AddressButton onClick={noAreaHandler}>지역설정안함</AddressButton>
        </AddressButtons>
        <AddressWrapper>
          <Address value={area} />
        </AddressWrapper>
      </StyledTradeArea>
    </FormControl>
  );
};

export default TradeArea;
