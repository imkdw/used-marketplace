import styled from "styled-components";
import RegisterForm from "./RegisterForm";

const StyledRegister = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Register = () => {
  return (
    <StyledRegister>
      <RegisterForm />
    </StyledRegister>
  );
};

export default Register;
