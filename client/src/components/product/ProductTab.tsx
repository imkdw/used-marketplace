import styled from "styled-components";
import { MouseEvent } from "react";
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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const TabItem = styled(Link)<{ color?: string }>`
  width: auto;
  height: auto;
  padding: 0 20px 0 0;
  display: flex;
  color: ${(props) => props.color || "#212121"};
  font-size: 14px;
  cursor: pointer;
  border-right: 1px solid #bebebe;

  &:nth-child(2),
  &:nth-child(3) {
    padding: 0 20px 0 20px;
  }

  &:last-child {
    border: none;
  }
`;

const ProductTab = () => {
  const [enableProductTab, setEnableProductTab] = useRecoilState(
    enableProductTabState
  );

  return (
    <StyledProductTab>
      <TabWrapper>
        <TabItem to="/product/new">상품등록</TabItem>
        <TabItem to="/product/manage">상품관리</TabItem>
        <TabItem to="/product/list">상품 판매내역</TabItem>
      </TabWrapper>
    </StyledProductTab>
  );
};

export default ProductTab;
