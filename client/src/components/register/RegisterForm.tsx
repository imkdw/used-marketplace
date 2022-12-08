import styled from "styled-components";
import { FormEvent } from "react";
import AuthInput from "../common/AuthInput";

const StyledRegisterForm = styled.form`
  width: 600px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
`;

const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
          <AuthInput label="이메일" name="email" type="text" />
          <AuthInput label="닉네임" name="nickname" type="text" />
          <AuthInput label="비밀번호" name="password" type="password" />
          <AuthInput label="비밀번호 확인" name="rePassword" type="password" />
        </InputWrapper>
      </Wrapper>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
