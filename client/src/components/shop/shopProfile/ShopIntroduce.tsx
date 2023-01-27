import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { myShopDataState } from "../../../recoil/shop.recoil";

const StyledShopIntroduce = styled.div`
  width: 100%;
  height: 110px;
  font-size: 14px;
  margin-top: 20px;
`;

const ShopIntroduce = () => {
  const myShopData = useRecoilValue(myShopDataState);
  const { shop } = myShopData;

  return <StyledShopIntroduce>{shop.introduce}</StyledShopIntroduce>;
};

export default ShopIntroduce;
