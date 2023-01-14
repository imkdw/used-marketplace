import styled from "styled-components";
import { ManageProductData } from "../../../types/product";
import { Link } from "react-router-dom";

const StyledMyProductItem = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
`;

const ItemWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const SumbnailWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sumbnail = styled.img`
  width: 100%;
  height: 90%;
`;

const Title = styled(Link)`
  color: #0072e6;
`;

const TextData = styled.div``;

const SellStatus = styled.select`
  width: 80%;
  height: 50px;
  font-size: 14px;
  border: 1px solid #dbdbdb;
  outline: none;
`;

const UtilButton = styled.button<{ color: string }>`
  width: 52px;
  height: 32px;
  border: 1px solid #dbdbdb;
  color: ${(props) => props.color};
`;

const MyProductItem = ({ myProduct }: { myProduct: ManageProductData }) => {
  const [modifiedDate, modifiedTime] = myProduct.modified_at.split(" ");
  console.log(modifiedDate, modifiedTime, myProduct.modified_at.split(" "));
  return (
    <StyledMyProductItem>
      <ItemWrapper width="14%">
        <SumbnailWrapper to="">
          <Sumbnail src={myProduct.sumbnail} />
        </SumbnailWrapper>
      </ItemWrapper>
      <ItemWrapper width="14%">
        <SellStatus>
          <option value="판매 중">판매 중</option>
          <option value="예약 중">예약 중</option>
          <option value="삭제">삭제</option>
          <option value="판매완료">판매완료</option>
        </SellStatus>
      </ItemWrapper>
      <ItemWrapper width="23%">
        <Title to="">{myProduct.title}</Title>
      </ItemWrapper>
      <ItemWrapper width="14%">
        <TextData>{Number(myProduct.price).toLocaleString("ko-KR")}원</TextData>
      </ItemWrapper>
      <ItemWrapper width="10%">
        <TextData>{myProduct.like_count}</TextData>
      </ItemWrapper>
      <ItemWrapper width="14%">
        <span>{modifiedDate}</span>
        <span>{modifiedTime}</span>
      </ItemWrapper>
      <ItemWrapper width="10%">
        <UtilButton color="#FF0508">UP</UtilButton>
        <UtilButton color="#0072E6">수정</UtilButton>
      </ItemWrapper>
    </StyledMyProductItem>
  );
};

export default MyProductItem;
