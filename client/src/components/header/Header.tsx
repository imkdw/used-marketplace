import styled from "styled-components";

import logoImage from "../../assets/images/logo.svg";
import glassImage from "../../assets/images/glass.png";
import sellIcon from "../../assets/images/sell-icon.png";
import myStoreIcon from "../../assets/images/my-store-icon.png";
import talkIcon from "../../assets/images/talk-icon.png";
import menuImage from "../../assets/images/menu.png";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  position: fixed;
  top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
`;

const HeaderWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
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
  width: 50%;
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
  width: 90%;
  height: 100%;
`;

const GlassWrapper = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.img``;

const UtilLinkWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const UtilLink = styled.button`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const UtilLinkIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const UtilLinkText = styled.div`
  color: #212121;
  font-size: 14px;
`;

const Category = styled.div`
  width: 60%;
  height: 70px;
  display: flex;
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
            <GlassWrapper>
              <Glass src={glassImage} alt="glass" />
            </GlassWrapper>
          </InputWrapper>
        </SearchBarWrapper>
        <UtilLinkWrapper>
          <UtilLink>
            <UtilLinkIcon src={sellIcon} />
            <UtilLinkText>판매하기</UtilLinkText>
          </UtilLink>
          <UtilLink>
            <UtilLinkIcon src={myStoreIcon} />
            <UtilLinkText>나의상점</UtilLinkText>
          </UtilLink>
          <UtilLink>
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
