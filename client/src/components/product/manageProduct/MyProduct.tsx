import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { productUrl } from "../../../config/url";
import { useRecoilValue } from "recoil";
import { loginUserState } from "../../../recoil/auth.recoil";
import MyProductItem from "./MyProductItem";
import { ManageProductData } from "../../../types/product";

const StyledMyProduct = styled.ul`
  width: 60%;
  height: auto;
`;

const MyProductSubject = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyProductSubjectItem = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyProduct = () => {
  const [myProducts, setMyProducts] = useState<ManageProductData[]>([]);
  const loginUser = useRecoilValue(loginUserState);

  useEffect(() => {
    const getMyProducts = async () => {
      const res = await axios.get(productUrl.myProducts, {
        headers: {
          Authorization: `Bearer ${loginUser.accessToken}`,
        },
      });

      setMyProducts(res.data);
    };

    getMyProducts();
  }, []);

  return (
    <StyledMyProduct>
      <MyProductSubject>
        <MyProductSubjectItem width="14%">사진</MyProductSubjectItem>
        <MyProductSubjectItem width="14%">판매상태</MyProductSubjectItem>
        <MyProductSubjectItem width="23%">상품명</MyProductSubjectItem>
        <MyProductSubjectItem width="14%">가격</MyProductSubjectItem>
        <MyProductSubjectItem width="10%">찜</MyProductSubjectItem>
        <MyProductSubjectItem width="14%">최근수정일</MyProductSubjectItem>
        <MyProductSubjectItem width="10%">기능</MyProductSubjectItem>
      </MyProductSubject>
      {myProducts.map((myProduct, index) => (
        <MyProductItem key={index} myProduct={myProduct}></MyProductItem>
      ))}
    </StyledMyProduct>
  );
};

export default MyProduct;
