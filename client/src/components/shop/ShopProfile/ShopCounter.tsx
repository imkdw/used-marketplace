import styled from "styled-components";

import shopIcon from "../../../assets/images/shop/shop.png";
import boxIcon from "../../../assets/images/shop/box.png";
import personIcon from "../../../assets/images/shop/person.png";
import itemIcon from "../../../assets/images/shop/item.png";

const StyledShopCounter = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  gap: 20px;
`;

const CounterItem = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Icon = styled.img`
  width: 14px;
  height: 13px;
`;

const Desc = styled.div`
  font-size: 13px;
  color: #888888;
`;

const Count = styled.div`
  font-size: 13px;
`;

const ShopCounter = () => {
  return (
    <StyledShopCounter>
      <CounterItem>
        <Icon src={shopIcon} />
        <Desc>상점오픈일</Desc>
        <Count>9999일 전</Count>
      </CounterItem>
      <CounterItem>
        <Icon src={personIcon} />
        <Desc>상점방문수</Desc>
        <Count>999명</Count>
      </CounterItem>
      <CounterItem>
        <Icon src={itemIcon} />
        <Desc>상품판매</Desc>
        <Count>999회</Count>
      </CounterItem>
      <CounterItem>
        <Icon src={boxIcon} />
        <Desc>택배발송</Desc>
        <Count>888회</Count>
      </CounterItem>
    </StyledShopCounter>
  );
};

export default ShopCounter;
