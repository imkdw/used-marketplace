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
      width: "50%",
      height: "50%",
    },
  };

  return (
    <ModalBackground>
      <DaumPostcodeEmbed onComplete={handleComplete} onClose={handleClose} {...props} />
    </ModalBackground>
  );
};

export default DaumPostcode;
