import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { clientUrl } from "../../../config/url";

import urlImage from "../../../assets/images/product_info/url.png";

const StyledShareLink = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-bottom: 1px solid;
  margin-top: 50px;
`;

const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  cursor: pointer;
`;

const ShareLink = () => {
  const location = useLocation();

  const onCopyUrl = () => {
    navigator.clipboard.writeText(clientUrl.host + location.pathname);
    alert("주소 복사가 완료되었습니다.");
  };

  return (
    <StyledShareLink>
      <ShareIcon src={urlImage} onClick={onCopyUrl} />
    </StyledShareLink>
  );
};

export default ShareLink;
