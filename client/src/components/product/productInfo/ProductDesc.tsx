import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { productInfoDataState } from "../../../recoil/product.recoil";
import ProductSummary from "./ProductSummary";
import StoreInfo from "./StoreInfo";

const StyledProductDesc = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const Description = styled.div`
  width: 65%;
  height: auto;
  border-right: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 90%;
  height: 80px;
  border-bottom: 1px solid rgb(238, 238, 238);
  font-size: 18px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
`;

const DescriptionData = styled.div`
  width: 100%;
  padding: 40px 0 40px 0;
  font-size: 14px;
`;

const ProductDesc = () => {
  const productInfoData = useRecoilValue(productInfoDataState);

  return (
    <StyledProductDesc>
      <Description>
        <Title>상품정보</Title>
        <DescriptionData>{productInfoData.description}</DescriptionData>
        <ProductSummary />
      </Description>
      <StoreInfo />
    </StyledProductDesc>
  );
};

export default ProductDesc;
