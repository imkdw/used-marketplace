import styled from "styled-components";
import GlassIcon from "../common/icons/RedGlassIcon";

const StyledTopSearch = styled.div`
  display: none;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 2px solid #fe5058;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const Input = styled.input`
  width: 80%;
  font-size: 16px;

  &::placeholder {
    color: #9b9b9b;
  }
`;

const TopSearch = () => {
  return (
    <StyledTopSearch>
      <Input placeholder="찾고 싶은 상품을 검색해보세요" />
      <GlassIcon />
    </StyledTopSearch>
  );
};

export default TopSearch;
