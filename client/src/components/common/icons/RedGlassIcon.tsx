import glassImage from "../../../assets/images/red-glass.png";
import styled from "styled-components";

const StyledGlassIcon = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.img``;

const RedGlassIcon = () => {
  return (
    <StyledGlassIcon>
      <Glass src={glassImage} alt="돋보기 아이콘" />
    </StyledGlassIcon>
  );
};

export default RedGlassIcon;
