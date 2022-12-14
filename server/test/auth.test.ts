import request from "supertest";
import app from "../src/app";
import { connectionPool } from "../src/utils/db";

describe("π νμκ°μ API νμ€νΈ", () => {
  const registerUrl = "/auth/register";

  const account = {
    email: "test@test.com",
    nickname: "νμ€νΈμ μ ",
    password: "test12345!",
    rePassword: "test12345!",
  };

  /** Teardrop */
  beforeAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  afterAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  test("1. μ μμ μΈ νμκ°μ", async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...account });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ email: "test@test.com", nickname: "νμ€νΈμ μ " });
  });

  test("2. μ΄λ©μΌ/λλ€μμ΄ μ€λ³΅λλ κ²½μ°", async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...account });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_email_and_nickname" });
  });

  test("3. μ΄λ©μΌμ΄ μ€λ³΅λλ κ²½μ°", async () => {
    const tempAccount = Object.assign({}, account);
    tempAccount.nickname = "νμ€νΈμ μ 1";

    const res = await request(app)
      .post(registerUrl)
      .send({ ...tempAccount });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_email" });
  });

  test("4. λλ€μμ΄ μ€λ³΅λλ κ²½μ°", async () => {
    const tempAccount = Object.assign({}, account);
    tempAccount.email = "test1@test.com";

    const res = await request(app)
      .post(registerUrl)
      .send({ ...tempAccount });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "exist_nickname" });
  });
});

describe("π λ‘κ·ΈμΈ API νμ€νΈ", () => {
  const loginUrl = "/auth/login";
  const registerUrl = "/auth/register";

  const registerAccount = {
    email: "test@test.com",
    nickname: "νμ€νΈμ μ ",
    password: "test12345!",
    rePassword: "test12345!",
  };

  const loginAccount = {
    email: "test@test.com",
    password: "test12345!",
  };

  /** νμ€νΈ μ  μ μ  1λͺ νμκ°μ */
  beforeAll(async () => {
    const res = await request(app)
      .post(registerUrl)
      .send({ ...registerAccount });
  });

  /** λͺ¨λ  νμ€νΈ μν ν users νμ΄λΈ μ΄κΈ°ν */
  afterAll(async () => {
    await connectionPool.execute("TRUNCATE users");
  });

  test("1. μ μμ μΈ λ‘κ·ΈμΈ", async () => {
    const res = await request(app)
      .post(loginUrl)
      .send({ ...loginAccount });

    expect(res.status).toBe(200);
    expect(res.body.accessToken.length).toBeGreaterThan(1);
    expect(res.body.email).toEqual("test@test.com");
    expect(res.body.nickname).toEqual("νμ€νΈμ μ ");
  });

  test("2. μ΄λ©μΌμ΄ μ‘΄μ¬νμ§ μλκ²½μ°", async () => {
    const tempLoginAccount = Object.assign({}, loginAccount);
    tempLoginAccount.email = "test1@test.com";
    const res = await request(app)
      .post(loginUrl)
      .send({ ...tempLoginAccount });

    expect(res.status).toBe(400);
    expect(res.body.message).toEqual("bad_request");
  });

  test("3. λΉλ°λ²νΈκ° μΌμΉνμ§ μλκ²½μ°", async () => {
    const tempLoginAccount = Object.assign({}, loginAccount);
    tempLoginAccount.password = "!12345test";
    const res = await request(app)
      .post(loginUrl)
      .send({ ...tempLoginAccount });

    expect(res.status).toBe(400);
    expect(res.body.message).toEqual("bad_request");
  });
});

describe("λ―Όκ°μΈ μ¬λΆ νμ€νΈ", () => {
  test("κ°λ―Όμ±μ λ―Όκ°μΈ μ΄λ€.", () => {
    expect(1 + 1).toBe(2);
  });

  test("κΉλμ°λ λ―Όκ°μΈ μ΄λ€.", () => {
    expect(1 + 1).toBe(1);
  });
});
