import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { productInfoDataState } from "../../../recoil/product.recoil";

import ClockIcon from "../../../assets/images/product_data/clock.png";
import EyeIcon from "../../../assets/images/product_data/eye.png";
import HeartIcon from "../../../assets/images/product_data/heart.png";
import { Link } from "react-router-dom";

const StyledProductData = styled.div`
  width: 60%;
  height: 490px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductImages = styled.div`
  width: 45%;
  height: 428px;
  background-color: aliceblue;
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

const ProductData = () => {
  const productInfoData = useRecoilValue(productInfoDataState);

  return (
    <StyledProductData>
      <ProductImages />
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
            {productInfoData.like_count}
          </IconWrapper>
          <IconWrapper>
            <Icon src={EyeIcon} width="21px" height="13px" />
            {productInfoData.show_count}
          </IconWrapper>
          <IconWrapper>
            <Icon src={ClockIcon} width="16px" height="16px" />
            {productInfoData.created_at.split("T")[0]}
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
              {productInfoData.include_delivery_cost ? "배송비 포함" : "배송비 별도"}
            </InfoData>
          </InfoItem>
          <InfoItem>
            <InfoSubject>거래지역</InfoSubject>
            <InfoData>{productInfoData.trade_area}</InfoData>
          </InfoItem>
        </Info>
        <MyStore to="">내 상점 관리</MyStore>
      </ProductDatas>
    </StyledProductData>
  );
};

export default ProductData;
