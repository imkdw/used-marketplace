import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { shopUrl } from "../../../config/url";
import { loginUserState } from "../../../recoil/auth.recoil";
import { myShopDataState } from "../../../recoil/shop.recoil";
import LikeProduct from "../likeProduct/LikeProduct";
import ShopProduct from "../shopProduct/ShopProduct";

const StyledShopInfo = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const InfoTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const InfoTabItem = styled(Link)`
  width: 50%;
  height: 100%;
  border: 1px solid #eeeeee;
  border-bottom: 1px solid;
  background-color: #fafafa;
  color: #888888;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border: 1px solid;
    border-bottom: none;
    color: black;
    font-weight: bold;
    background-color: white;
  }
`;

const getCurrentUrl = (pathname: string) => {
  const sortaionUrlArray = pathname.split("/");
  const sortationUrl = sortaionUrlArray[sortaionUrlArray.length - 1];

  return sortationUrl;
};

const ShopInfo = () => {
  const myShopData = useRecoilValue(myShopDataState);
  const loginUser = useRecoilValue(loginUserState);
  const { products } = myShopData;

  const location = useLocation();
  const currentUrl = getCurrentUrl(location.pathname);

  return (
    <StyledShopInfo>
      <InfoTab>
        <InfoTabItem to={"/shop/" + loginUser.userId + "/products"}>상품 {products.length}</InfoTabItem>
        <InfoTabItem to={"/shop/" + loginUser.userId + "/favorites"}>찜 0</InfoTabItem>
      </InfoTab>
      {currentUrl === "products" && <ShopProduct />}
      {currentUrl === "favorites" && <LikeProduct />}
    </StyledShopInfo>
  );
};

export default ShopInfo;
