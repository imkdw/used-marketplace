import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledShareLink = styled.div`
  width: 100%;
  height: 50px;
  background-color: yellowgreen;
`;

const ShareIcon = styled(Link)``;

const ShareLink = () => {
  return (
    <StyledShareLink>
      <ShareIcon to="">네이버</ShareIcon>
      <ShareIcon to="">네이버</ShareIcon>
      <ShareIcon to="">네이버</ShareIcon>
    </StyledShareLink>
  );
};

export default ShareLink;
