import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loginUserState } from "../../recoil/auth.recoil";

const StyledTopHeader = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 10px 0 10px;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }
`;

const LinkItem = styled(Link)`
  width: auto;
  font-size: 13px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopHeader = () => {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);

  const logoutHandler = () => {
    /** 세션스토리지에서 토큰 제거 */
    sessionStorage.removeItem("accessToken");

    /** 로그인유저 정보 전역상태 초기화 */
    setLoginUser({
      userId: "",
      accessToken: "",
      email: "",
      nickname: "",
    });
  };

  return (
    <StyledTopHeader>
      <LinkWrapper>
        {loginUser.accessToken ? (
          <>
            <LinkItem to={"/shop/" + loginUser.userId}>내 상점</LinkItem>
            <LinkItem to="" onClick={logoutHandler}>
              로그아웃
            </LinkItem>
          </>
        ) : (
          <>
            <LinkItem to="/login">로그인</LinkItem>
            <LinkItem to="/register">회원가입</LinkItem>
          </>
        )}
      </LinkWrapper>
    </StyledTopHeader>
  );
};

export default TopHeader;
