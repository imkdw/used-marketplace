import styled from "styled-components";
import ShopCounter from "./ShopCounter";

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
  return (
    <StyledRightProfile>
      <ProfileWrapper>
        <ShopName>#shopName</ShopName>
        <ShopCounter />
      </ProfileWrapper>
    </StyledRightProfile>
  );
};

export default RightProfile;
