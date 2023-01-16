import styled from "styled-components";

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
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
