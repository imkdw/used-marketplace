import dotenv from "dotenv";

dotenv.config();

export const kakaoConfig = {
  restApikey: process.env.KAKAO_REST_API_KEY,
  redirectUri: process.env.KAKAO_REDIRECT_URI,
};
