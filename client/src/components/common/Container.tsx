import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState } from "../../recoil/product.recoil";
import DaumPostcode from "./DaumPostCode";

const StyledContainer = styled.div<{ marginTop: boolean }>`
  width: 55%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  children: React.ReactNode;
  marginTop: boolean;
}

const Container = ({ children, marginTop }: ContainerProps) => {
  const enableDaumPostcode = useRecoilValue(enableDaumPostcodeState);

  /** 상품추가, 상품수정 페이지 구분하기 */
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");

  return (
    <StyledContainer marginTop={marginTop}>
      {enableDaumPostcode && <DaumPostcode isEdit={isEdit} />}
      {children}
    </StyledContainer>
  );
};

export default Container;
