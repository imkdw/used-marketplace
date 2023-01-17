import { useRecoilValue } from "recoil";
import styled from "styled-components";

import homeIcon from "../../../assets/images/product_info/home.png";
import rightArrow from "../../../assets/images/product_info/right-arrow.png";
import { productInfoDataState } from "../../../recoil/product.recoil";

const StyledProductCategory = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  margin-top: 190px;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid;
`;

const Home = styled.img`
  width: 15px;
  height: 15px;
`;

const Arrow = styled.img`
  width: 6px;
  height: 10px;
  margin-top: 3px;
`;

const Text = styled.span`
  font-size: 12px;
`;

const CategoryText = styled.span`
  width: 154px;
  height: 28px;
  border: 1px solid #dbdbdb;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const ProductCategory = () => {
  const ProductInfoData = useRecoilValue(productInfoDataState);

  return (
    <StyledProductCategory>
      <Home src={homeIcon} />
      <Text>홈</Text>
      <Arrow src={rightArrow} />
      <CategoryText>{ProductInfoData.category_big}</CategoryText>
      <Arrow src={rightArrow} />
      <CategoryText>{ProductInfoData.category_medium}</CategoryText>
      <Arrow src={rightArrow} />
      <CategoryText>{ProductInfoData.category_small}</CategoryText>
    </StyledProductCategory>
  );
};

export default ProductCategory;
