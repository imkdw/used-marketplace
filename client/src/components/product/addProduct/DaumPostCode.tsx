import { useState, useEffect } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { addProductDataState, enableDaumPostcodeState } from "../../../recoil/product.recoil";

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CloseButtonIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.63125 3.76875L3.76875 4.63125L14.1375 15L3.76875 25.3688L4.63125 26.2313L15 15.8625L25.3688 26.2313L26.2313 25.3688L15.8625 15L26.2313 4.63125L25.3688 3.76875L15 14.1375L4.63125 3.76875Z"
        fill="white"
      />
    </svg>
  );
};

const DaumPostcode = () => {
  const setEnableDaumPostcode = useSetRecoilState(enableDaumPostcodeState);
  const setAddProduct = useSetRecoilState(addProductDataState);

  const handleComplete = (data: any) => {
    const fullAddress = `${data.sido} ${data.sigungu} ${data.bname}`;

    setAddProduct((prevState) => {
      return { ...prevState, tradeArea: fullAddress };
    });
  };

  const handleClose = () => {
    setEnableDaumPostcode(false);
  };

  const props = {
    style: {
      width: "35%",
      height: "50%",
    },
  };

  return (
    <ModalBackground>
      <DaumPostcodeEmbed onComplete={handleComplete} onClose={handleClose} {...props} />
      <CloseButton onClick={handleClose}>
        <CloseButtonIcon />
      </CloseButton>
    </ModalBackground>
  );
};

export default DaumPostcode;
