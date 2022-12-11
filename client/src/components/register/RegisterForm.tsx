import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import AuthInput from "../common/AuthInput";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { authUrl } from "../../config/url";
import { RegisterAccount } from "../../types/register";
import { registerValidator } from "./register.validator";

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
  const [account, setAccount] = useState<RegisterAccount>({
    email: "",
    nickname: "",
    password: "",
    rePassword: "",
  });

  const [isValidAccount, setIsValidAccount] = useState({
    email: false,
    nickname: false,
    password: false,
    rePassword: false,
  });

  const { email, nickname, password, rePassword } = account;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setAccount((prevState) => {
      return { ...prevState, [name]: value };
    });

    const isValid = registerValidator(name, value);
    if (isValid) {
      setIsValidAccount((prevState) => {
        return { ...prevState, [name]: true };
      });
    } else {
      setIsValidAccount((prevState) => {
        return { ...prevState, [name]: false };
      });
    }

    if (name === "rePassword") {
      // 비밀번호 확인 검증로직 구현필요 22.12.11
    }
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await axios.post(authUrl.register, account);
    console.log(res);
  };

  return (
    <StyledRegisterForm onSubmit={submitHandler}>
      <Wrapper>
        <HeaderText>본인 정보를 입력해주세요</HeaderText>
        <InputWrapper>
          <FormControl>
            <AuthInput label="이메일" name="email" type="text" onChange={changeHandler} value={email} />
            {isValidAccount.email && <ErrorMessage message="올바른 이메일 형식입니다." isValid />}
            {!isValidAccount.email && <ErrorMessage message="올바르지않은 이메일 형식입니다." isValid={false} />}
          </FormControl>
          <FormControl>
            <AuthInput label="닉네임" name="nickname" type="text" onChange={changeHandler} value={nickname} />
            {isValidAccount.nickname && <ErrorMessage message="올바른 닉네임 형식입니다." isValid />}
            {!isValidAccount.nickname && (
              <ErrorMessage message="특수문자는 사용이 불가능하며 최대 2~8자리까지 가능합니다." isValid={false} />
            )}
          </FormControl>
          <FormControl>
            <AuthInput label="비밀번호" name="password" type="password" onChange={changeHandler} value={password} />
            {isValidAccount.password && <ErrorMessage message="올바른 비밀번호 형식입니다." isValid />}
            {!isValidAccount.password && (
              <ErrorMessage message="특수문자를 포함하여 최대 10자리이상 입력해주세요." isValid={false} />
            )}
          </FormControl>
          <FormControl>
            <AuthInput
              label="비밀번호 확인"
              name="rePassword"
              type="password"
              onChange={changeHandler}
              value={rePassword}
            />
          </FormControl>
        </InputWrapper>
        <SubmitButton>회원가입</SubmitButton>
      </Wrapper>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
