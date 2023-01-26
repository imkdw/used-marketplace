import styled from "styled-components";
import { FormEvent, useState, ChangeEvent } from "react";
import AuthInput from "../common/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import axios from "axios";
import { authUrl } from "../../config/url";
import { useSetRecoilState } from "recoil";
import { loginUserState } from "../../recoil/auth.recoil";

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

const SubmitButton = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 72px;
  background-color: ${(props) => props.backgroundColor};
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

  const navigator = useNavigate();

  const setLoginUser = useSetRecoilState(loginUserState);

  const changeAccountHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;

    setAccount((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (account.email.length === 0) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (account.password.length === 0) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post(authUrl.login, { ...account });

      /** 로그인 성공시 */
      if (res.status === 200) {
        const { accessToken, email, nickname, userId } = res.data;
        console.log(res.data);
        /** 세션스토리지에 access token 저장 */
        sessionStorage.setItem("accessToken", accessToken);

        /** 전역 상태에 로그인유저 정보 저장 */
        setLoginUser((prevState) => {
          return { ...prevState, accessToken, email, nickname, userId };
        });

        /** 메인 페이지로 이동 */
        navigator("/");
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        alert("등록되지않은 이메일이거나 비밀번호가 일치하지 않습니다.");
      } else {
        alert("서버 오류입니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <StyledLoginForm onSubmit={submitHandler}>
      <Wrapper>
        <HeaderText>계정을 입력해주세요</HeaderText>
        <InputWrapper>
          <FormControl>
            <AuthInput
              label="이메일"
              name="email"
              type="text"
              onChange={changeAccountHandler}
              value={account.email}
            />
          </FormControl>
          <FormControl>
            <AuthInput
              label="비밀번호"
              name="password"
              type="password"
              onChange={changeAccountHandler}
              value={account.password}
            />
          </FormControl>
        </InputWrapper>
        <LinkWrapper>
          <StyledLink to="">비밀번호를 잊으셨나요?</StyledLink>
          <StyledLink to="/register">아직 계정이 없으신가요?</StyledLink>
        </LinkWrapper>
        <KakaoLogin />
        <SubmitButton backgroundColor="#D80C18">로그인</SubmitButton>
      </Wrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
