import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { productInfoDataState } from "../../../recoil/product.recoil";

import ClockIcon from "../../../assets/images/product_data/clock.png";
import EyeIcon from "../../../assets/images/product_data/eye.png";
import HeartIcon from "../../../assets/images/product_data/heart.png";
import { Link, useNavigate } from "react-router-dom";
import ProductImage from "./ProductImage";
import { loginUserState } from "../../../recoil/auth.recoil";

import chatIcon from "../../../assets/images/product_info/chat.png";
import axios from "axios";
import { productUrl } from "../../../config/url";
import { useState } from "react";

const StyledProductData = styled.div`
  width: 100%;
  min-height: 490px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductDatas = styled.div`
  width: 50%;
  height: 428px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleAndPrice = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 40px;
`;

const Icons = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconWrapper = styled.div`
  width: auto;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #cccccc;
  border-right: 1px solid #eeeeee;
  padding-right: 10px;

  &:last-child {
    border: none;
  }
`;

const Icon = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Info = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  gap: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #999999;
    top: 9px;
    left: 6px;
  }
`;

const InfoSubject = styled.div`
  width: 80px;
  font-size: 14px;
  color: #999999;
  padding-left: 20px;
`;

const InfoData = styled.div`
  font-size: 14px;
`;

const UtilLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const MyStore = styled(Link)`
  width: 100%;
  height: 56px;
  background-color: #ffa425;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeButton = styled.button<{ backgroundColor: string }>`
  width: 48%;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LikeIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 4px;
`;

const LikeCount = styled.div`
  color: white;
`;

const ChatButton = styled.button`
  width: 48%;
  height: 56px;
  background-color: #ffa425;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ChatIcon = styled.img`
  width: 20px;
  height: 19px;
  margin-top: 4px;
`;

const ProductData = () => {
  const [productInfoData, setProductInfoData] = useRecoilState(productInfoDataState);
  const loginUser = useRecoilValue(loginUserState);
  const navigator = useNavigate();

  /** 게시글 찜하기 기능 */
  const productLikeHandler = async () => {
    try {
      const body = {
        productId: productInfoData.productId,
      };

      await axios.post(productUrl.likeProduct, body, {
        headers: {
          Authorization: `Bearer ${loginUser.accessToken}`,
        },
      });

      /** 기존 찜하기된 게시물일 경우 찜하기 취소 */
      if (productInfoData.isLikeProduct) {
        setProductInfoData((prevState) => {
          return {
            ...prevState,
            isLikeProduct: !productInfoData.isLikeProduct,
            likeCount: productInfoData.likeCount - 1,
          };
        });
      } else {
        setProductInfoData((prevState) => {
          return {
            ...prevState,
            isLikeProduct: !productInfoData.isLikeProduct,
            likeCount: productInfoData.likeCount + 1,
          };
        });
      }
    } catch (err: any) {
      const { status } = err.response;
      if (status === 401) {
        alert("로그인이 필요한 기능입니다.");
        navigator("/login");
      }
    }
  };

  return (
    <StyledProductData>
      <ProductImage />
      <ProductDatas>
        <TitleAndPrice>
          <Title>{productInfoData.title}</Title>
          <Price>
            {Number(productInfoData.price).toLocaleString("ko-KR")}
            <span style={{ fontSize: "28px", paddingLeft: "5px" }}>원</span>
          </Price>
        </TitleAndPrice>
        <Icons>
          <IconWrapper>
            <Icon src={HeartIcon} width="16px" height="16px" />
            {productInfoData.likeCount}
          </IconWrapper>
          <IconWrapper>
            <Icon src={EyeIcon} width="21px" height="13px" />
            {productInfoData.showCount}
          </IconWrapper>
          <IconWrapper>
            <Icon src={ClockIcon} width="16px" height="16px" />
            {productInfoData.createdAt.split("T")[0]}
          </IconWrapper>
        </Icons>
        <Info>
          <InfoItem>
            <InfoSubject>상품상태</InfoSubject>
            <InfoData>{productInfoData.quality === "old" ? "중고" : "신품"}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoSubject>교환여부</InfoSubject>
            <InfoData>{productInfoData.tradeable ? "교환가능" : "교환불가능"}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoSubject>배송비</InfoSubject>
            <InfoData style={{ color: "#6247E2" }}>
              {productInfoData.includeDeliveryCost ? "배송비 포함" : "배송비 별도"}
            </InfoData>
          </InfoItem>
          <InfoItem>
            <InfoSubject>거래지역</InfoSubject>
            <InfoData>{productInfoData.tradeArea}</InfoData>
          </InfoItem>
        </Info>
        {productInfoData.author === loginUser.email ? (
          <MyStore to="/product/manage">내 상점 관리</MyStore>
        ) : (
          <UtilLinks>
            {productInfoData.isLikeProduct ? (
              <LikeButton onClick={productLikeHandler} backgroundColor="#333333">
                <LikeIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGNzJGMzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA1IDEuMDQ1aC4yMzNjLjI4LjIyOC41MzcuNDkuNzYyLjc3Ny4yMjUtLjI4OC40ODEtLjU0OS43NjItLjc3N2guMjMzYTYuMTYgNi4xNiAwIDAgMC0uMDktLjExM0M5LjY4NC4zNDQgMTAuNjI4IDAgMTEuNiAwIDE0LjA2NCAwIDE2IDIuMTEgMTYgNC43OTZjMCAzLjI5Ni0yLjcyIDUuOTgxLTYuODQgMTAuMDYyTDggMTZsLTEuMTYtMS4xNTFDMi43MiAxMC43NzcgMCA4LjA5MiAwIDQuNzk2IDAgMi4xMSAxLjkzNiAwIDQuNCAwYy45NzIgMCAxLjkxNi4zNDQgMi42OTUuOTMyYTYuMTYgNi4xNiAwIDAgMC0uMDkuMTEzeiIvPgo8L3N2Zz4K" />
                찜<LikeCount>{productInfoData.likeCount}</LikeCount>
              </LikeButton>
            ) : (
              <LikeButton onClick={productLikeHandler} backgroundColor="#cccccc">
                <LikeIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA1IDEuMDQ1aC4yMzNjLjI4LjIyOC41MzcuNDkuNzYyLjc3Ny4yMjUtLjI4OC40ODEtLjU0OS43NjItLjc3N2guMjMzYTYuMTYgNi4xNiAwIDAgMC0uMDktLjExM0M5LjY4NC4zNDQgMTAuNjI4IDAgMTEuNiAwIDE0LjA2NCAwIDE2IDIuMTEgMTYgNC43OTZjMCAzLjI5Ni0yLjcyIDUuOTgxLTYuODQgMTAuMDYyTDggMTZsLTEuMTYtMS4xNTFDMi43MiAxMC43NzcgMCA4LjA5MiAwIDQuNzk2IDAgMi4xMSAxLjkzNiAwIDQuNCAwYy45NzIgMCAxLjkxNi4zNDQgMi42OTUuOTMyYTYuMTYgNi4xNiAwIDAgMC0uMDkuMTEzeiIvPgo8L3N2Zz4K" />
                찜<LikeCount>{productInfoData.likeCount}</LikeCount>
              </LikeButton>
            )}

            <ChatButton>
              <ChatIcon src={chatIcon} />
              채팅하기
            </ChatButton>
          </UtilLinks>
        )}
      </ProductDatas>
    </StyledProductData>
  );
};

export default ProductData;
