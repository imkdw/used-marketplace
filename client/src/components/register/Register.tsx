import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentPageState } from "../../recoil/common.recoil";
import RegisterForm from "./RegisterForm";

const StyledRegister = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    setCurrentPage("register");
  }, [setCurrentPage]);

  return (
    <StyledRegister>
      <RegisterForm />
    </StyledRegister>
  );
};

export default Register;
