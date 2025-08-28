import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Productdetail from "./pages/Productdetail";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/productdetail" element={<Productdetail />}/>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;