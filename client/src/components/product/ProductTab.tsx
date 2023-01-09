import styled from "styled-components";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { enableProductTabState } from "../../recoil/product.recoil";

const StyledProductTab = styled.div`
  width: 100%;
  height: 63px;
  min-height: 63px;
  margin-top: 190px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
`;

const TabWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const TabItem = styled.span<{ color: string }>`
  width: auto;
  height: auto;
  padding: 0 20px 0 0;
  display: flex;
  color: ${(props) => props.color || "#212121"};
  font-size: 14px;
  cursor: pointer;
  border-right: 1px solid #bebebe;

  &:nth-child(2),
  &:nth-child(3) {
    padding: 0 20px 0 20px;
  }

  &:last-child {
    border: none;
  }
`;

const ProductTab = () => {
  const [enableProductTab, setEnableProductTab] = useRecoilState(enableProductTabState);

  const enableHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const dataName = event.currentTarget.dataset.name;

    if (dataName) {
      setEnableProductTab(dataName);
    }
  };

  return (
    <StyledProductTab>
      <TabWrapper>
        <TabItem
          data-name="add"
          onClick={enableHandler}
          color={enableProductTab === "add" ? "red" : ""}
        >
          상품등록
        </TabItem>
        <TabItem
          data-name="manage"
          onClick={enableHandler}
          color={enableProductTab === "manage" ? "red" : ""}
        >
          상품관리
        </TabItem>
        <TabItem
          data-name="history"
          onClick={enableHandler}
          color={enableProductTab === "history" ? "red" : ""}
        >
          구매/판매 내역
        </TabItem>
      </TabWrapper>
    </StyledProductTab>
  );
};

export default ProductTab;
