import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { productUrl } from "../../../config/url";
import ProductCategory from "./ProductCategory";
import { useSetRecoilState } from "recoil";
import { productInfoDataState } from "../../../recoil/product.recoil";
import ProductData from "./ProductData";
import RelationProduct from "./RelationProduct";

const StyledProductInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 제목, 가격, 찜, 조회수, 업로드일, 상태, 교ㄹ환여부, 배송비여부, 거래지역, 사진, 내용, 작성자, 카테고리, 상품태그
const ProductInfo = () => {
  const productId = useParams().productId;
  const setProductInfoData = useSetRecoilState(productInfoDataState);

  useEffect(() => {
    const getProductInfo = async () => {
      const res = await axios.get(`${productUrl.productInfo}/${productId}`);
      setProductInfoData(res.data);
    };

    getProductInfo();
  }, [productId]);

  return (
    <StyledProductInfo>
      <ProductCategory />
      <ProductData />
      <RelationProduct />
    </StyledProductInfo>
  );
};

export default ProductInfo;
