import request from "supertest";
import app from "../src/app";
import { connectionPool } from "../src/utils/db";
import AuthValidator from "../src/validators/auth.validator";
import { Request, Response, NextFunction } from "express";

/**
 * 회원가입 API
 * 정상적인 회원가입 : 201
 * 이메일, 닉네임 중복 : 500, exist_email_and_nickname
 * 이메일 중복 : 400, exist_email
 * 닉네임 중복 : 400, exist_nickname
 */

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
  const account = {
    email: "test@test.com",
    password: "test12345!",
  };

  beforeAll(async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...account });
  });

  test("1. 정상적인 로그인", async () => {
    const res = await request(app)
      .post(loginUrl)
      .send({ ...account });

    expect(res.statusCode).toBe(200);
    // expect(res.body).
  });
});
