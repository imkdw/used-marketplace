import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { productInfoDataState } from "../../../recoil/product.recoil";

import mapIcon from "../../../assets/images/product_info/map.png";
import categoryIcon from "../../../assets/images/product_info/category.png";
import tagIcon from "../../../assets/images/product_info/tag.png";

const StyledProductSummary = styled.ul`
  width: 100%;
  height: 90px;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SummaryItem = styled.li`
  width: 33.3%;
  height: 70px;
  border-right: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  gap &:last-child {
    border-right: none;
  }
`;

const Subject = styled.div`
  color: #b2b2b2;
  font-size: 13px;
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const SubjectIcon = styled.img`
  width: 16px;
  height: 18px;
`;

const Content = styled.div`
  font-size: 13px;
  color: #666666;
  display: flex;
  justify-content: center;
`;

const ProductSummary = () => {
  const productInfoData = useRecoilValue(productInfoDataState);
  const { categoryBig, categoryMedium, categorySmall } = productInfoData;

  return (
    <StyledProductSummary>
      <SummaryItem>
        <Subject>
          <SubjectIcon src={mapIcon} />
          거래지역
        </Subject>
        <Content>{productInfoData.tradeArea}</Content>
      </SummaryItem>
      <SummaryItem>
        <Subject>
          <SubjectIcon src={categoryIcon} />
          카테고리
        </Subject>
        <Content>
          {categoryMedium}/{categorySmall}
        </Content>
      </SummaryItem>
      <SummaryItem>
        <Subject>
          <SubjectIcon src={tagIcon} />
          상품태그
        </Subject>
        <Content>#테스트 #테스트</Content>
      </SummaryItem>
    </StyledProductSummary>
  );
};

export default ProductSummary;
