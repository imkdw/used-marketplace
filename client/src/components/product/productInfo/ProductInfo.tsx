import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { productUrl } from "../../../config/url";
import ProductCategory from "./ProductCategory";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productInfoDataState } from "../../../recoil/product.recoil";
import ProductData from "./ProductData";
import RelationProduct from "./RelationProduct";
import ShareLink from "./ShareLink";
import ProductDesc from "./ProductDesc";
import { loginUserState } from "../../../recoil/auth.recoil";

const StyledProductInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProductInfo = () => {
  const productId = useParams().productId;
  const setProductInfoData = useSetRecoilState(productInfoDataState);
  const loginUser = useRecoilValue(loginUserState);

  useEffect(() => {
    const getProductInfo = async () => {
      const res = await axios.get(`${productUrl.productInfo}/${productId}`, {
        headers: {
          Authorization: `Bearer ${loginUser.accessToken}`,
        },
      });

      setProductInfoData(res.data);
    };

    getProductInfo();
  }, [productId, setProductInfoData]);

  return (
    <StyledProductInfo>
      <ProductCategory />
      <ProductData />
      <RelationProduct />
      <ShareLink />
      <ProductDesc />
    </StyledProductInfo>
  );
};

export default ProductInfo;
