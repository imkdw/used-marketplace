import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Container from "./components/common/Container";
import StatusBar from "./components/main/StatusBar";
import Login from "./components/login/Login";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <StatusBar />
    </Container>
  );
};

export default App;
