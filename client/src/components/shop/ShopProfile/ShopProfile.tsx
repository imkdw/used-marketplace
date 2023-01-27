import styled from "styled-components";

import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const StyledShopProfile = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #eeeeee;
  display: flex;
`;

const ShopProfile = () => {
  return (
    <StyledShopProfile>
      <LeftProfile />
      <RightProfile />
    </StyledShopProfile>
  );
};

export default ShopProfile;
