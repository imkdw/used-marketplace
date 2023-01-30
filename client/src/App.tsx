import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Container from "./components/common/Container";
import StatusBar from "./components/main/StatusBar";
import Login from "./components/login/Login";
import Product from "./components/product/Product";
import TopHeader from "./components/topHeader/TopHeader";
import Header from "./components/header/Header";
import ProductInfo from "./components/product/productInfo/ProductInfo";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState } from "./recoil/common.recoil";
import MyShop from "./components/shop/MyShop";

const App = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const isMarginTop = currentPage === "login" || currentPage === "register";

  return (
    <Container marginTop={isMarginTop ? false : true}>
      <GlobalStyle />
      {currentPage !== "login" && currentPage !== "register" && (
        <>
          <TopHeader />
          <Header />
        </>
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/new" element={<Product />} />
        <Route path="/product/manage" element={<Product />} />
        <Route path="/product/list" element={<Product />} />
        <Route path="/product/edit/:productId" element={<Product />} />
        <Route path="/product/:productId" element={<ProductInfo />} />
        <Route path="/shop/:userId" element={<MyShop />} />
        <Route path="/shop/:usedId/products" element={<MyShop />} />
        <Route path="/shop/:usedId/favorites" element={<MyShop />} />
      </Routes>
    </Container>
  );
};

export default App;
