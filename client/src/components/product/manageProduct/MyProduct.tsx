import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { productUrl } from "../../../config/url";
import { useRecoilValue } from "recoil";
import { loginUserState } from "../../../recoil/auth.recoil";
import MyProductItem from "./MyProductItem";
import { ManageProductData } from "../../../types/product";
import { useNavigate } from "react-router-dom";

const StyledMyProduct = styled.ul`
  width: 100%;
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
  const navigator = useNavigate();

  useEffect(() => {
    const getMyProducts = async () => {
      try {
        const res = await axios.get(productUrl.myProducts, {
          headers: {
            Authorization: `Bearer ${loginUser.accessToken}`,
          },
        });

        setMyProducts(res.data);
        console.log(res.data);
      } catch (err: any) {
        const { status, data } = err.response;
        if (status === 401) {
          if (data.message === "jwt_expired") {
            alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
            navigator("/login");
            return;
          }
        }
      }
    };

    getMyProducts();
  }, [loginUser.accessToken, navigator]);

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
