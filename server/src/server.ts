import app from "./app";

/** 서버 구동환경 분리 */
app.listen(app.get("port"), () => console.log(`App Running on localhost:${app.get("port")}`));
