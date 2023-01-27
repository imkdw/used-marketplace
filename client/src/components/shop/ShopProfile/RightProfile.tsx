import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { myShopDataState } from "../../../recoil/shop.recoil";
import ShopCounter from "./ShopCounter";
import ShopIntroduce from "./ShopIntroduce";

const StyledRightProfile = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  width: 90%;
  height: 90%;
`;

const ShopName = styled.div`
  width: 100%;
  height: 75px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
`;

const RightProfile = () => {
  const myShopData = useRecoilValue(myShopDataState);
  const { shop } = myShopData;

  return (
    <StyledRightProfile>
      <ProfileWrapper>
        <ShopName>{shop.nickname}</ShopName>
        <ShopCounter />
        <ShopIntroduce />
      </ProfileWrapper>
    </StyledRightProfile>
  );
};

export default RightProfile;
