import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentPageState } from "../../recoil/common.recoil";
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
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    setCurrentPage("main");
  }, []);

  return (
    <StyledMain>
      <TopSearch />
      <MainWrapper>
        <Slider />
      </MainWrapper>
    </StyledMain>
  );
};

export default Main;
