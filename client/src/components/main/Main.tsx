import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentPageState } from "../../recoil/common.recoil";
import TopSearch from "../topSearch/TopSearch";
import RecommandProduct from "./RecommandProduct";
import Slider from "./Slider";

const StyledMain = styled.div`
  width: 100%;
  height: auto;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`;

const Intro = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-color: #f5f5f5;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2.5;
`;

const Main = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    setCurrentPage("main");
  }, []);

  return (
    <StyledMain>
      <MainWrapper>
        <Slider />
        <Intro>
          해당 사이트는 영리목적이 없는 공부용(포트폴리오) 사이트임을 밝힙니다.
          <br />
          번개장터의 레이아웃을 참고하여 제작하였습니다.,
          <br />
          문제가 있을경우 imkdw@kakao.com 으로 연락주시면 감사하겠습니다!
        </Intro>
        <RecommandProduct />
      </MainWrapper>
    </StyledMain>
  );
};

export default Main;
