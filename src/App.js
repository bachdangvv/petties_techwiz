import Homepage from "./pages/HomePage/Homepage";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetails/Productdetail";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Apphomepage from "./components/Apphomepage";
import Introduction from "./pages/Introduction/Introduction";
import ErrorPage from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/productdetail" element={<ProductDetail />}/>
            <Route path="/blog" element={<Blog />}/>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;