import styled from "styled-components";

import logoImage from "../../assets/images/logo.svg";
import sellIcon from "../../assets/images/sell-icon.png";
import myStoreIcon from "../../assets/images/my-store-icon.png";
import talkIcon from "../../assets/images/talk-icon.png";
import menuImage from "../../assets/images/menu.png";
import GlassIcon from "../common/icons/GlassIcon";
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

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    width: 70%;
  }

  @media screen and (max-width: 1023px) {
    width: 90%;
  }
`;

const LogoWrapper = styled.div`
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
  justify-content: flex-end;
`;

const UtilLink = styled(Link)`
  width: 28%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
  width: 55%;
  height: 70px;
  display: flex;

  @media screen and (max-width: 1300px) {
    width: 70%;
  }

  @media screen and (max-width: 1023px) {
    width: 90%;
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
        <LogoWrapper>
          <Logo src={logoImage} alt="logo" />
        </LogoWrapper>
        <SearchBarWrapper>
          <InputWrapper>
            <Input placeholder="상품명, 지역명, @상점명 입력" />
            <GlassIcon />
          </InputWrapper>
        </SearchBarWrapper>
        <UtilLinkWrapper>
          <UtilLink to="">
            <UtilLinkIcon src={sellIcon} />
            <UtilLinkText>판매하기</UtilLinkText>
          </UtilLink>
          <UtilLink to="">
            <UtilLinkIcon src={myStoreIcon} />
            <UtilLinkText>나의상점</UtilLinkText>
          </UtilLink>
          <UtilLink to="">
            <UtilLinkIcon src={talkIcon} />
            <UtilLinkText>중고톡</UtilLinkText>
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
