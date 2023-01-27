import { useParams } from "react-router-dom";
import styled from "styled-components";
import ShopInfo from "./shopInfo/ShopInfo";
import ShopProfile from "./shopProfile/ShopProfile";

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
      <ShopInfo />
    </StyledMyShop>
  );
};

export default MyShop;
