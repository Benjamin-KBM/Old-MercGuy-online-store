import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";
import Products from "./Components/Products";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
