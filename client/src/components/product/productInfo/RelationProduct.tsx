import styled from "styled-components";

const StyledRelationProduct = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Products = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
`;

const Product = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 90%;
`;

const ProductTitle = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const RelationProduct = () => {
  const productData = [1, 2, 3, 4, 5, 6];
  return (
    <StyledRelationProduct>
      <Title>연관상품</Title>
      <Products>
        {productData.map((product, index) => (
          <Product key={index}>
            <ProductImage src="https://lwi.nexon.com/maplestory/2022/1222_9CDBCB4275B00462/meta.png" />
            <ProductTitle>{"연관상품 " + product}</ProductTitle>
          </Product>
        ))}
      </Products>
    </StyledRelationProduct>
  );
};

export default RelationProduct;
