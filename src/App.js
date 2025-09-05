import Homepage from "./pages/HomePage/Homepage";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import Product2 from "./pages/Product/Product2";
import Product3 from "./pages/Product/Product3";
import Product4 from "./pages/Product/Product4";
import ProductDetail from "./pages/ProductDetails/Productdetail";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Apphomepage from "./components/Apphomepage";
import Introduction from "./pages/Introduction/Introduction";
import ErrorPage from "./pages/Error/Error";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/product" element={<Product />}/>
              <Route path="/product-robusta" element={<Product2 />}/>
              <Route path="/product-single-origin" element={<Product3 />}/>
              <Route path="/product-decaf" element={<Product4 />}/>
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/cart" element={<Cart />}/>
              <Route path="/productdetail" element={<ProductDetail />}/>
              <Route path="/blog" element={<Blog />}/>
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;