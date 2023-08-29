import { Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SuccessMessage from "./components/ContactDetails/SuccessMessage";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/cartPage";
import LoginPage from "./pages/LoginPage";
import ReqConfirm from "./pages/ReqConfirm";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contact />} />
        <Route path="/success-message" element={<SuccessMessage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reqRecive" element={<ReqConfirm />} />
      </Route>
    </Routes>
  );
}

export default App;