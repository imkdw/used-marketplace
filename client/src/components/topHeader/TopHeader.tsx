import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTopHeader = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 10px 0 10px;
`;

const LinkItem = styled(Link)`
  width: auto;
  font-size: 13px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopHeader = () => {
  return (
    <StyledTopHeader>
      <LinkWrapper>
        <LinkItem to="/login">로그인</LinkItem>
        <LinkItem to="/register">회원가입</LinkItem>
      </LinkWrapper>
    </StyledTopHeader>
  );
};

export default TopHeader;
