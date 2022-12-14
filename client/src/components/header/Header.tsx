import styled from "styled-components";

import logoImage from "../../assets/images/logo.svg";
import sellIcon from "../../assets/images/sell-icon.png";
import myStoreIcon from "../../assets/images/my-store-icon.png";
import talkIcon from "../../assets/images/talk-icon.png";
import menuImage from "../../assets/images/menu.png";
import GlassIcon from "../common/icons/RedGlassIcon";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  position: fixed;
  top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
  background-color: white;
  z-index: 100;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const LogoWrapper = styled(Link)`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 65%;
`;

const SearchBarWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  border: 2px solid #f72f33;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
`;

const UtilLinkWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UtilLink = styled(Link)`
  width: 28%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-right: 1px solid #bebebe;

  &:last-child {
    border: none;
  }
`;

const UtilLinkIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const UtilLinkText = styled.div`
  color: #212121;
  font-size: 14px;
`;

const Category = styled.div`
  width: 60%;
  height: 70px;
  display: flex;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const HambergerMenu = styled.img`
  width: 22px;
  height: 18px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoWrapper to="/">
          <Logo src={logoImage} alt="logo" />
        </LogoWrapper>
        <SearchBarWrapper>
          <InputWrapper>
            <Input placeholder="?????????, ?????????, @????????? ??????" />
            <GlassIcon />
          </InputWrapper>
        </SearchBarWrapper>
        <UtilLinkWrapper>
          <UtilLink to="/product">
            <UtilLinkIcon src={sellIcon} />
            <UtilLinkText>????????????</UtilLinkText>
          </UtilLink>
          <UtilLink to="">
            <UtilLinkIcon src={myStoreIcon} />
            <UtilLinkText>????????????</UtilLinkText>
          </UtilLink>
          <UtilLink to="">
            <UtilLinkIcon src={talkIcon} />
            <UtilLinkText>?????????</UtilLinkText>
          </UtilLink>
        </UtilLinkWrapper>
      </HeaderWrapper>
      <Category>
        <HambergerMenu src={menuImage} />
      </Category>
    </StyledHeader>
  );
};

export default Header;
