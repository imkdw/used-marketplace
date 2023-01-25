import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledMyShop = styled.div`
  width: 100%;
  height: 500px;
  background-color: aliceblue;
`;

const MyShop = () => {
  const userId = useParams().userId;

  return <StyledMyShop>{userId}</StyledMyShop>;
};

export default MyShop;
