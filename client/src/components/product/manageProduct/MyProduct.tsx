import styled from "styled-components";

const StyledMyProduct = styled.div`
  width: 55%;
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
    </StyledMyProduct>
  );
};

export default MyProduct;
