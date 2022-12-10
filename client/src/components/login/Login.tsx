import styled from "styled-components";
import LoginForm from "./LoginForm";

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Login = () => {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
