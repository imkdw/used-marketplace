import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState } from "../../recoil/product.recoil";
import DaumPostcode from "./DaumPostCode";

const StyledContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  const enableDaumPostcode = useRecoilValue(enableDaumPostcodeState);

  /** 상품추가, 상품수정 페이지 구분하기 */
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");

  return (
    <StyledContainer>
      {enableDaumPostcode && <DaumPostcode isEdit={isEdit} />}
      {children}
    </StyledContainer>
  );
};

export default Container;
