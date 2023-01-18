import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { enableDaumPostcodeState } from "../../recoil/product.recoil";
import DaumPostcode from "../product/addProduct/DaumPostcode";

const StyledContainer = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  const enableDaumPostcode = useRecoilValue(enableDaumPostcodeState);

  return (
    <StyledContainer>
      {enableDaumPostcode && <DaumPostcode />}
      {children}
    </StyledContainer>
  );
};

export default Container;
