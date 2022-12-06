import { Routes } from "react-router-dom";
import TopHeader from "./components/topHeader/TopHeader";
import Header from "./components/header/Header";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TopHeader />
      <Header />
      <Routes></Routes>
    </>
  );
};

export default App;
