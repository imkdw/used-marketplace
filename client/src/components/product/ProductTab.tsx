import styled from "styled-components";
import { useState, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { enableProductTabState } from "../../recoil/product.recoil";
import { Link } from "react-router-dom";

const StyledProductTab = styled.div`
  width: 100%;
  height: 63px;
  min-height: 63px;
  margin-top: 190px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
`;

const TabWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
`;

const TabItem = styled.span<{ color: string }>`
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.color || "#212121"};
  font-size: 14px;
  cursor: pointer;
`;

const ProductTab = () => {
  const [enableProductTab, setEnableProductTab] = useRecoilState(enableProductTabState);

  const enableHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const dataName = event.currentTarget.dataset.name;

    if (dataName) {
      setEnableProductTab(dataName);
    }
  };

  return (
    <StyledProductTab>
      <TabWrapper>
        <TabItem data-name="add" onClick={enableHandler} color={enableProductTab === "add" ? "red" : ""}>
          상품등록
        </TabItem>
        <TabItem data-name="manage" onClick={enableHandler} color={enableProductTab === "manage" ? "red" : ""}>
          상품관리
        </TabItem>
        <TabItem data-name="history" onClick={enableHandler} color={enableProductTab === "history" ? "red" : ""}>
          구매/판매 내역
        </TabItem>
      </TabWrapper>
    </StyledProductTab>
  );
};

export default ProductTab;
