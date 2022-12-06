import styled from "styled-components";

import logoImage from "../../assets/logo.svg";
import glassImage from "../../assets/glass.png";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  position: fixed;
  top: 40px;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 80%;
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
  width: 60%;
`;

const SearchBarWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 36px;
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

const UtilButtonWrapper = styled.div`
  width: 30%;
  height: 100%;
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
        <UtilButtonWrapper></UtilButtonWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
