import { useParams } from "react-router-dom";
import styled from "styled-components";
import ShopProfile from "./ShopProfile/ShopProfile";

const StyledMyShop = styled.div`
  width: 100%;
  height: auto;
  margin-top: 220px;
`;

const MyShop = () => {
  const userId = useParams().userId;

  return (
    <StyledMyShop>
      <ShopProfile />
    </StyledMyShop>
  );
};

export default MyShop;
