import { RegisterAccount, RegisterAccountValid } from "../../types/register";

/**
 * registerValidator : account 입력값 유효성 검증 함수
 * @param account {email, nickname, password, rePassword} [key: string]: string
 * @returns {RegisterAccount} 각 값에 대한 유효성검증 True/False 여부
 */
export const registerValidator = (account: RegisterAccount): RegisterAccountValid => {
  /*eslint no-useless-escape: "off"*/
  const isAccountValid: RegisterAccountValid = {
    email: false,
    nickname: false,
    password: false,
    rePassword: false,
  };

  const { email, nickname, password, rePassword } = account;

  const specialCharRegex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  /** 이메일 : 정규식으로 형식이 올바른지 확인 */
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (emailRegex.test(email)) {
    isAccountValid.email = true;
  }

  /** 닉네임 : 특수문자가 들어갈 수 없으며 2이상, 8이하의 자리로 구성 */
  const nicknameRule = nickname.length !== 0 && nickname.length >= 2 && nickname.length <= 8;
  if (!specialCharRegex.test(nickname) && nicknameRule) {
    isAccountValid.nickname = true;
  }

  /** 비밀번호 : 특수문자를 포함하여 10자리 이상으로 구성 */
  const passwordRule = password.length >= 10 && password.length !== 0;
  if (specialCharRegex.test(password) && passwordRule) {
    isAccountValid.password = true;
  }

  /** 비밀번호 확인 : 비밀번호가 동일한지 검사 */
  if (rePassword.length !== 0 && password === rePassword) {
    isAccountValid.rePassword = true;
  }

  return isAccountValid;
};
