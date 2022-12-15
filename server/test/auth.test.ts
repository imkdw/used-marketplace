import request from "supertest";
import app from "../src/app";
import { connectionPool } from "../src/utils/db";

describe("🔔 회원가입 API 테스트", () => {
  const registerUrl = "/auth/register";

  const account = {
    email: "test@test.com",
    nickname: "테스트유저",
    password: "test12345!",
    rePassword: "test12345!",
  };

  /** 모든 테스트 수행 전 users 테이블 초기화 */
  beforeAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  /** 모든 테스트 수행 후 users 테이블 초기화 */
  afterAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  test("1. 정상적인 회원가입", async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...account });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ email: "test@test.com", nickname: "테스트유저" });
  });

  test("2. 이메일/닉네임이 중복되는 경우", async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...account });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_email_and_nickname" });
  });

  test("3. 이메일이 중복되는 경우", async () => {
    const tempAccount = Object.assign({}, account);
    tempAccount.nickname = "테스트유저1";

    const res = await request(app)
      .post(registerUrl)
      .send({ ...tempAccount });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_email" });
  });

  test("4. 닉네임이 중복되는 경우", async () => {
    const tempAccount = Object.assign({}, account);
    tempAccount.email = "test1@test.com";

    const res = await request(app)
      .post(registerUrl)
      .send({ ...tempAccount });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_nickname" });
  });
});

describe("🔔 로그인 API 테스트", () => {
  const loginUrl = "/auth/login";
  const registerUrl = "/auth/register";

  const registerAccount = {
    email: "test@test.com",
    nickname: "테스트유저",
    password: "test12345!",
    rePassword: "test12345!",
  };

  const loginAccount = {
    email: "test@test.com",
    password: "test12345!",
  };

  /** 테스트 전 유저 1명 회원가입 */
  beforeAll(async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...registerAccount });
  });

  /** 모든 테스트 수행 후 users 테이블 초기화 */
  afterAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  test("1. 정상적인 로그인", async () => {
    const res = await request(app)
      .post(loginUrl)
      .send({ ...loginAccount });

    expect(res.status).toBe(200);
    expect(res.body.accessToken.length).toBeGreaterThan(1);
    expect(res.body.email).toEqual("test@test.com");
    expect(res.body.nickname).toEqual("테스트유저");
  });

  test("2. 이메일이 존재하지 않는경우", async () => {
    const tempLoginAccount = Object.assign({}, loginAccount);
    tempLoginAccount.email = "test1@test.com";
    const res = await request(app)
      .post(loginUrl)
      .send({ ...tempLoginAccount });

    expect(res.status).toBe(400);
    expect(res.body.message).toEqual("bad_request");
  });

  test("3. 비밀번호가 일치하지 않는경우", async () => {
    const tempLoginAccount = Object.assign({}, loginAccount);
    tempLoginAccount.password = "!12345test";
    const res = await request(app)
      .post(loginUrl)
      .send({ ...tempLoginAccount });

    expect(res.status).toBe(400);
    expect(res.body.message).toEqual("bad_request");
  });
});
