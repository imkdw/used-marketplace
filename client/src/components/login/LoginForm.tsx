import styled from "styled-components";
import { FormEvent, useState, ChangeEvent } from "react";
import AuthInput from "../common/AuthInput";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";

const StyledLoginForm = styled.form`
  width: 500px;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const HeaderText = styled.h1`
  width: 100%;
  color: #3f3f3f;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormControl = styled.div`
  width: 100%;
  height: auto;
  min-height: 70px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 72px;
  background-color: #f3b7ba;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  color: #888888;
`;

const LoginForm = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const { email, password } = account;

  const changeAccountHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setAccount((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledLoginForm onSubmit={submitHandler}>
      <Wrapper>
        <HeaderText>계정을 입력해주세요</HeaderText>
        <InputWrapper>
          <FormControl>
            <AuthInput label="이메일" name="email" type="text" onChange={changeAccountHandler} value={email} />
          </FormControl>
          <FormControl>
            <AuthInput
              label="비밀번호"
              name="password"
              type="password"
              onChange={changeAccountHandler}
              value={password}
            />
          </FormControl>
        </InputWrapper>
        <LinkWrapper>
          <StyledLink to="">비밀번호를 까먹으셨나요?</StyledLink>
          <StyledLink to="/register">아직 계정이 없으신가요?</StyledLink>
        </LinkWrapper>
        <KakaoLogin />
        <SubmitButton>로그인</SubmitButton>
      </Wrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
