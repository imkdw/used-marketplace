import styled from "styled-components";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AuthInput from "../common/AuthInput";
import ErrorMessage from "./ErrorMessage";
import axios, { AxiosError } from "axios";
import { authUrl } from "../../config/url";
import { RegisterAccount } from "../../types/register";
import { registerValidator } from "./register.validator";
import { useNavigate } from "react-router-dom";

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

const SubmitButton = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 72px;
  background-color: ${(props) => props.backgroundColor};
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

  const [borderColor, setBorderColor] = useState({
    email: "#eeeeee",
    nickname: "#eeeeee",
    password: "#eeeeee",
    rePassword: "#eeeeee",
  });

  const navigator = useNavigate();

  /** useState 비동기처리 해결을 위한 유효성검증 로직 */
  useEffect(() => {
    setIsValidAccount(registerValidator(account));
  }, [account]);

  /** input용 change handler */
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setAccount((account) => {
      return { ...account, [name]: value };
    });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axios.post(authUrl.register, account);
      if (res.status === 201) {
        alert("회원가입이 완료되었습니다.");
        navigator("/login");
      }
    } catch (error: any) {
      const { status, data } = error.response;
      /** 입력값오류, 중복계정 에러처리 */
      if (status === 400) {
        const { message } = data;
        if (message === "exist_email_and_nickname") {
          setBorderColor({
            ...borderColor,
            email: "red",
            nickname: "red",
          });
          alert("중복된 이메일과 닉네임 입니다.");
        } else if (message === "exist_email") {
          setBorderColor({
            ...borderColor,
            email: "red",
          });
          alert("중복된 이메일 입니다.");
        } else if (message === "exist_nickname") {
          setBorderColor({
            ...borderColor,
            nickname: "red",
          });
          alert("중복된 닉네임 입니다.");
        } else if (message === "invalid_email") {
          setBorderColor({
            ...borderColor,
            email: "red",
          });
          alert("올바르지않은 이메일 형식입니다.");
        } else if (message === "invalid_nickname") {
          setBorderColor({
            ...borderColor,
            nickname: "red",
          });
          alert("올바르지않은 닉네임 형식입니다.");
        } else if (message === "invalid_password") {
          setBorderColor({
            ...borderColor,
            password: "red",
          });
          alert("올바르지않은 비밀번호 형식입니다.");
        } else if (message === "password_mismatch") {
          setBorderColor({
            ...borderColor,
            rePassword: "red",
          });
          alert("비밀번호가 일치하지 않습니다.");
        } else {
          alert("서버 오류입니다. 다시 시도해주세요.");
          return;
        }
      } else {
        /** HTTP 500 Error */
        alert("서버 오류입니다. 다시 시도해주세요.");
        return;
      }
    }
  };

  const { email, nickname, password, rePassword } = isValidAccount;

  return (
    <StyledRegisterForm onSubmit={submitHandler}>
      <Wrapper>
        <HeaderText>본인 정보를 입력해주세요</HeaderText>
        <InputWrapper>
          <FormControl>
            <AuthInput
              label="이메일"
              name="email"
              type="text"
              onChange={inputChangeHandler}
              value={account.email}
              borderColor={borderColor.email}
            />
            {isValidAccount.email && <ErrorMessage message="올바른 이메일 형식입니다." isValid />}
            {!isValidAccount.email && <ErrorMessage message="올바르지않은 이메일 형식입니다." isValid={false} />}
          </FormControl>
          <FormControl>
            <AuthInput
              label="닉네임"
              name="nickname"
              type="text"
              onChange={inputChangeHandler}
              value={account.nickname}
              borderColor={borderColor.nickname}
            />
            {isValidAccount.nickname && <ErrorMessage message="올바른 닉네임 형식입니다." isValid />}
            {!isValidAccount.nickname && (
              <ErrorMessage message="특수문자는 사용불가, 최대 2~8자리까지 가능합니다." isValid={false} />
            )}
          </FormControl>
          <FormControl>
            <AuthInput
              label="비밀번호"
              name="password"
              type="password"
              onChange={inputChangeHandler}
              value={account.password}
              borderColor={borderColor.password}
            />
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
              onChange={inputChangeHandler}
              value={account.rePassword}
              borderColor={borderColor.rePassword}
            />
            {isValidAccount.rePassword && <ErrorMessage message="비밀번호가 일치합니다." isValid />}
            {!isValidAccount.rePassword && <ErrorMessage message="비밀번호가 일치하지 않습니다." isValid={false} />}
          </FormControl>
        </InputWrapper>

        {email && nickname && password && rePassword ? (
          <SubmitButton backgroundColor="#D80C18">회원가입</SubmitButton>
        ) : (
          <SubmitButton backgroundColor="#f3b7ba" disabled>
            회원가입
          </SubmitButton>
        )}
      </Wrapper>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
