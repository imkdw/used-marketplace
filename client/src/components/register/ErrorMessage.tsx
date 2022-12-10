import styled from "styled-components";

const StyledErrorMessage = styled.div`
  width: 100%;
  height: auto;
  color: red;
  font-size: 14px;
`;

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
