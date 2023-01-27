import styled from "styled-components";
import ShopProduct from "./ShopProduct";

const StyledShopInfo = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const InfoTab = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
`;

const InfoTabItem = styled.li`
  width: 33.3%;
  height: 100%;
  border: 1px solid #eeeeee;
  border-bottom: 1px solid;
  background-color: #fafafa;
  color: #888888;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border: 1px solid;
    border-bottom: none;
    color: black;
    font-weight: bold;
    background-color: white;
  }
`;

const ShopInfo = () => {
  return (
    <StyledShopInfo>
      <InfoTab>
        <InfoTabItem>상품 9</InfoTabItem>
        <InfoTabItem>상점후기 9</InfoTabItem>
        <InfoTabItem>찜 9</InfoTabItem>
      </InfoTab>
      <ShopProduct />
    </StyledShopInfo>
  );
};

export default ShopInfo;
