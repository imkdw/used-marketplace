import axios from "axios";
import queryString from "query-string";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const KakaoLoginForm = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  useEffect(() => {
    const reqKakaoLogin = async () => {
      const res = await axios.post("http://localhost:5000/auth/kakao-login", { code });
      console.log(res.data);
    };

    reqKakaoLogin();
  }, [code]);

  return <div>{code}</div>;
};

export default KakaoLoginForm;
