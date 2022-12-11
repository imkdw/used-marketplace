import styled from "styled-components";

const StyledErrorMessage = styled.div<{ color: string }>`
  width: 100%;
  height: auto;
  color: ${(props) => props.color};
  font-size: 14px;
`;

interface ErrorMessageProps {
  message: string;
  isValid: boolean;
}

const ErrorMessage = ({ message, isValid }: ErrorMessageProps) => {
  return (
    <>
      {isValid && <StyledErrorMessage color="#009000">{message}</StyledErrorMessage>}
      {!isValid && <StyledErrorMessage color="red">{message}</StyledErrorMessage>}
    </>
  );
};

export default ErrorMessage;
