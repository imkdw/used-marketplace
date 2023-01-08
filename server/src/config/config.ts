import dotenv from "dotenv";
dotenv.config();

const nodeDev = process.env.NODE_DEV;

/** 데이터베이스 관련 설정 */
export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: nodeDev === "test" ? process.env.DB_DATABASE_TEST : process.env.DB_DATABASE,
};

/** 파이어베이스 관련 설정 */
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSendorId: process.env.FIREBASE_MESSAGING_SENDOR_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

/** JWT 관련 설정 */
export const jwtConfig = {
  secretKey: process.env.JWT_SECRET_KEY as string,
  expiresIn: process.env.JWT_EXPIRES_IN,
  algorithm: process.env.JWT_ALGORITHM ? process.env.JWT_ALGORITHM : "none",
};

/** 카카오 OAuth 관련 설정 */
export const kakaoConfig = {
  restApikey: process.env.KAKAO_REST_API_KEY,
  redirectUri: process.env.KAKAO_REDIRECT_URI,
};

/** NCP API 관련 */
export const ncpConfig = {
  apiKeyId: process.env.NCP_APIGW_API_KEY_ID,
  apiKey: process.env.NCP_APIGW_API_KEY,
};
