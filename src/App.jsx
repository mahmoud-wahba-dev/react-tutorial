import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Cart from "./components/cart";
import { Container } from "react-bootstrap";
import NavbarApp from "./components/NavbarApp";
import About from "./components/About";

function App() {
  return (
      <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
