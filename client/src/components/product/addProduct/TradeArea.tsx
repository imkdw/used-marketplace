import axios from "axios";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { geoUrl } from "../../../config/url";
import { addProductDataState, enableDaumPostcodeState } from "../../../recoil/product.recoil";

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
  const [addProductData, setAddProductData] = useRecoilState(addProductDataState);
  const setEnableDaumPostcode = useSetRecoilState(enableDaumPostcodeState);

  const noAreaHandler = () => {
    setAddProductData((prevState) => {
      return { ...prevState, tradeArea: "지역설정안함" };
    });
  };

  /** 다음 주소검색 온오프  */
  const searchAreaHandler = () => {
    setEnableDaumPostcode((prevState) => !prevState);
  };

  const gpsHandler = () => {
    if (!("geolocation" in navigator)) {
      alert("GPS 사용이 불가능한 환경입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `${geoUrl.coordToAddress}?coords=${latitude},${longitude}`;
      const res = await axios.get(url);
      const { sido, sigungu, bname } = res.data;

      setAddProductData((prevState) => {
        return { ...prevState, tradeArea: `${sido} ${sigungu} ${bname}` };
      });
    });
  };

  return (
    <FormControl>
      <Label>거래지역</Label>
      <StyledTradeArea>
        <AddressButtons>
          <AddressButton onClick={gpsHandler} type="button">
            내 위치
          </AddressButton>
          <AddressButton type="button">최근 지역</AddressButton>
          <AddressButton onClick={searchAreaHandler} type="button">
            주소 검색
          </AddressButton>
          <AddressButton onClick={noAreaHandler} type="button">
            지역설정안함
          </AddressButton>
        </AddressButtons>
        <AddressWrapper>
          <Address value={addProductData.tradeArea} onChange={() => {}} />
        </AddressWrapper>
      </StyledTradeArea>
    </FormControl>
  );
};

export default TradeArea;
