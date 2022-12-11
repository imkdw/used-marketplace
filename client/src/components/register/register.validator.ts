import { RegisterAccount } from "../../types/register";

export const registerValidator = (name: string, value: string) => {
  /*eslint no-useless-escape: "off"*/
  const specialCharRegex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  switch (name) {
    case "email":
      /** 이메일 : 정규식으로 형식이 올바른지 확인 */
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      if (!emailRegex.test(value)) {
        return;
      }

      return true;

    case "nickname":
      /** 닉네임 : 특수문자가 들어갈 수 없으며 2이상, 8이하의 자리로 구성 */
      const nicknameRule = value.length !== 0 && value.length >= 2 && value.length <= 8;
      if (specialCharRegex.test(value) || !nicknameRule) {
        return;
      }

      return true;

    case "password":
      /** 비밀번호 : 특수문자를 포함하여 10자리 이상으로 구성 */
      const passwordRule = value.length >= 10 && value.length !== 0;
      if (!specialCharRegex.test(value) || !passwordRule) {
        return;
      }

      return true;
  }
};
