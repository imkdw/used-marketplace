import styled from "styled-components";
import { FormEvent } from "react";
import AuthInput from "../common/AuthInput";
import ErrorMessage from "./ErrorMessage";

const StyledRegisterForm = styled.form`
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
  gap: 50px;
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

const RegisterForm = () => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledRegisterForm onSubmit={submitHandler}>
      <Wrapper>
        <HeaderText>본인 정보를 입력해주세요</HeaderText>
        <InputWrapper>
          <FormControl>
            <AuthInput label="이메일" name="email" type="text" />
            <ErrorMessage message="" />
          </FormControl>
          <FormControl>
            <AuthInput label="닉네임" name="nickname" type="text" />
            <ErrorMessage message="" />
          </FormControl>
          <FormControl>
            <AuthInput label="비밀번호" name="password" type="password" />
            <ErrorMessage message="" />
          </FormControl>
          <FormControl>
            <AuthInput label="비밀번호 확인" name="rePassword" type="password" />
            <ErrorMessage message="" />
          </FormControl>
        </InputWrapper>
        <SubmitButton>회원가입</SubmitButton>
      </Wrapper>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
