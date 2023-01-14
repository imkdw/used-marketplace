import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentPageState } from "../../recoil/common.recoil";
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
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    setCurrentPage("login");
  }, []);

  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
