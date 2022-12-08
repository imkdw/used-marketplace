import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Container from "./components/common/Container";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
};

export default App;
