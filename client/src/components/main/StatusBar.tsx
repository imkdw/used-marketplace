import styled from "styled-components";
import { ChatIcon, HomeIcon, MarketIcon, MyInfoIcon, PlusIcon } from "./StatusBarIcon";
import { Link } from "react-router-dom";

const StyledStatusBar = styled.div`
  display: none;
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  border: 1px solid #eeeeee;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const IconWrapper = styled(Link)`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusBar = () => {
  return (
    <StyledStatusBar>
      <IconWrapper to="">
        <HomeIcon />
      </IconWrapper>
      <IconWrapper to="">
        <MarketIcon />
      </IconWrapper>
      <IconWrapper to="">
        <PlusIcon />
      </IconWrapper>
      <IconWrapper to="">
        <ChatIcon />
      </IconWrapper>
      <IconWrapper to="">
        <MyInfoIcon />
      </IconWrapper>
    </StyledStatusBar>
  );
};

export default StatusBar;
