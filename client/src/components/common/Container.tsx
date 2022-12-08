import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
