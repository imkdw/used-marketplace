import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import mapImage from "../../../assets/images/shop/map.png";
import axios from "axios";
import { shopUrl } from "../../../config/url";
import { useRecoilValue } from "recoil";
import { loginUserState } from "../../../recoil/auth.recoil";

const StyledLikeProduct = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

const TitleText = styled.div`
  font-size: 18px;
`;

const Products = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProductsHeader = styled.div`
  display: flex;
  font-size: 16px;
  height: 80px;
  align-items: center;
  gap: 20px;
`;

const Product = styled(Link)`
  width: auto;
  height: 315px;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ProductSumbnail = styled.img`
  width: 190px;
  height: 190px;
`;

const ProductTitle = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const PriceAndDate = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CreatedAt = styled.div`
  font-size: 12px;
  color: #888888;
`;

const TradeArea = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const Icon = styled.img`
  width: 15px;
  height: 16px;
`;

const TradeAreaText = styled.div`
  font-size: 14px;
  color: #666666;
`;

const LikeProduct = () => {
  const loginUser = useRecoilValue(loginUserState);

  useEffect(() => {
    const getLikeProducts = async () => {
      const res = await axios.get(`${shopUrl.likeProduct}/${loginUser.userId}`);
    };

    getLikeProducts();
  }, []);

  return (
    <StyledLikeProduct>
      <Title>
        <TitleText>{/* 상품 <span style={{ color: "red" }}>{products.length}</span>{" "} */}</TitleText>
      </Title>
      <ProductsHeader>
        <span>전체</span>
        {/* <span style={{ color: "#888888" }}>{products.length}개</span> */}
      </ProductsHeader>
      <Products>
        {/* {products.map((product, index) => (
          <Product key={product.productId} to={"/product/" + product.productId}>
            <ProductSumbnail src={product.sumbnail} />
            <ProductTitle>{product.title}</ProductTitle>
            <PriceAndDate>
              <ProductPrice>
                {product.price.toLocaleString("ko-KR")}
                <span style={{ fontSize: "13px" }}> 원</span>
              </ProductPrice>
              <CreatedAt>{product.createdAt.split("T")[0]}</CreatedAt>
            </PriceAndDate>
            <TradeArea>
              <Icon src={mapImage} />
              <TradeAreaText>{product.tradeArea}</TradeAreaText>
            </TradeArea>
          </Product>
        ))} */}
      </Products>
    </StyledLikeProduct>
  );
};

export default LikeProduct;
