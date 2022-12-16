import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Container from "./components/common/Container";
import StatusBar from "./components/main/StatusBar";
import Login from "./components/login/Login";
import KakaoLoginForm from "./components/login/KakaoLoginForm";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLoginForm />} />
      </Routes>
      <StatusBar />
    </Container>
  );
};

export default App;
