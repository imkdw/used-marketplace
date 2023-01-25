import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledProductTab = styled.div`
  width: 100%;
  height: 63px;
  min-height: 63px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  margin-top: 190px;
`;

const TabWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const TabItem = styled(Link)<{ color?: string }>`
  width: 120px;
  height: auto;
  display: flex;
  color: ${(props) => props.color || "#212121"};
  font-size: 13px;
  cursor: pointer;
  border-right: 1px solid #bebebe;

  &:first-child {
    width: 90px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    justify-content: center;
  }

  &:last-child {
    border: none;
  }
`;

const getCurrentUrl = (pathname: string) => {
  const sortaionUrlArray = pathname.split("/");
  const sortationUrl = sortaionUrlArray[sortaionUrlArray.length - 1];

  return sortationUrl;
};

const ProductTab = () => {
  const location = useLocation();
  const currentUrl = getCurrentUrl(location.pathname);

  return (
    <StyledProductTab>
      <TabWrapper>
        <TabItem to="/product/new" color={currentUrl === "new" ? "red" : ""}>
          상품등록
        </TabItem>
        <TabItem to="/product/manage" color={currentUrl === "manage" ? "red" : ""}>
          상품관리
        </TabItem>
        <TabItem to="/product/list" color={currentUrl === "list" ? "red" : ""}>
          판매내역
        </TabItem>
      </TabWrapper>
    </StyledProductTab>
  );
};

export default ProductTab;
