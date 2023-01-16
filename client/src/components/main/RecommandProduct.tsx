import styled from "styled-components";

const StyledRecommandProduct = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const RecommandProduct = () => {
  return (
    <StyledRecommandProduct>
      <Title>오늘의 상품 추천</Title>
      {/* 상품 로딩 구현필요 */}
    </StyledRecommandProduct>
  );
};

export default RecommandProduct;
