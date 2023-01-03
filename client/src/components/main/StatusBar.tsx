import styled from "styled-components";
import { ChatIcon, HomeIcon, MarketIcon, MyInfoIcon, PlusIcon } from "./StatusBarIcon";
import { Link } from "react-router-dom";
import { useState, MouseEvent } from "react";

const StyledStatusBar = styled.div`
  display: none;
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  border: 1px solid #eeeeee;
  background-color: white;

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
  const [enableStatus, setEnableStatus] = useState<string>("");

  const statusChangeHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const status = event.currentTarget.dataset.status as string;
    setEnableStatus(status);
  };

  return (
    <StyledStatusBar>
      {enableStatus === "home" ? (
        <IconWrapper to="/" data-status="home" onClick={statusChangeHandler}>
          <HomeIcon color="black" />
        </IconWrapper>
      ) : (
        <IconWrapper to="/" data-status="home" onClick={statusChangeHandler}>
          <HomeIcon />
        </IconWrapper>
      )}
      {enableStatus === "following" ? (
        <IconWrapper to="/" data-status="following" onClick={statusChangeHandler}>
          <MarketIcon color="black" />
        </IconWrapper>
      ) : (
        <IconWrapper to="/" data-status="following" onClick={statusChangeHandler}>
          <MarketIcon />
        </IconWrapper>
      )}
      {enableStatus === "addProduct" ? (
        <IconWrapper to="/product" data-status="addProduct" onClick={statusChangeHandler}>
          <PlusIcon color="black" />
        </IconWrapper>
      ) : (
        <IconWrapper to="/product" data-status="addProduct" onClick={statusChangeHandler}>
          <PlusIcon />
        </IconWrapper>
      )}
      {enableStatus === "chat" ? (
        <IconWrapper to="/" data-status="chat" onClick={statusChangeHandler}>
          <ChatIcon color="black" />
        </IconWrapper>
      ) : (
        <IconWrapper to="/" data-status="chat" onClick={statusChangeHandler}>
          <ChatIcon />
        </IconWrapper>
      )}
      {enableStatus === "myInfo" ? (
        <IconWrapper to="/" data-status="myInfo" onClick={statusChangeHandler}>
          <MyInfoIcon color="black" />
        </IconWrapper>
      ) : (
        <IconWrapper to="/" data-status="myInfo" onClick={statusChangeHandler}>
          <MyInfoIcon />
        </IconWrapper>
      )}
    </StyledStatusBar>
  );
};

export default StatusBar;
