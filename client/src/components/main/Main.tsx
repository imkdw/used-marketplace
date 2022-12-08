import styled from "styled-components";
import Header from "../header/Header";
import TopHeader from "../topHeader/TopHeader";

const StyledMain = styled.div`
  width: 100%;
  height: auto;
`;
const Main = () => {
  return (
    <StyledMain>
      <TopHeader />
      <Header />
    </StyledMain>
  );
};

export default Main;
