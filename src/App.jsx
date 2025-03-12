import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import UserPage from "./pages/UserPage";
import TestPage from "./pages/TestPage";
import "./app.css";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/products/:productId"
          element={<ProductPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/contacts"
          element={<ContactsPage />}
        />
        <Route
          path="/user/:userId"
          element={<UserPage />}
        />
        <Route
          path="/test"
          element={<TestPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
