import styled from "styled-components";
import Header from "../header/Header";
import TopHeader from "../topHeader/TopHeader";
import TopSearch from "../topSearch/TopSearch";
import Slider from "./Slider";

const StyledMain = styled.div`
  width: 100%;
  height: auto;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 190px;

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <TopSearch />
      <TopHeader />
      <Header />
      <MainWrapper>
        <Slider />
      </MainWrapper>
    </StyledMain>
  );
};

export default Main;
