import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RecommandProductData } from "../../types/product";

const StyledRecommandProduct = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Product = styled(Link)`
  width: 18%;
  height: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 194px;
`;

const ProductTitle = styled.div`
  width: 90%;
  height: 34px;
  display: flex;
`;

const PriceAndDate = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreatedAt = styled.div`
  color: #888888;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecommandProduct = () => {
  const [products, setProducts] = useState<RecommandProductData[]>([]);

  useEffect(() => {
    const getAllProduct = async () => {
      const res = await axios.get("http://localhost:5000/product/all");
      setProducts(res.data);
    };

    getAllProduct();
  }, []);

  return (
    <StyledRecommandProduct>
      <Title>오늘의 상품 추천</Title>
      <Products>
        {products.map((product: RecommandProductData) => (
          <Product to={"product/" + product.productId} key={product.productId}>
            <ProductImage src={product.image} />
            <ProductTitle>{product.title}</ProductTitle>
            <PriceAndDate>
              <Price>
                {Number(product.price).toLocaleString("ko-KR")} <span style={{ fontSize: "14px" }}>원</span>
              </Price>
              <CreatedAt>{product.modifiedAt.split("T")[0]}</CreatedAt>
            </PriceAndDate>
          </Product>
        ))}
      </Products>
    </StyledRecommandProduct>
  );
};

export default RecommandProduct;
