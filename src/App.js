import Homepage from "./pages/HomePage/Homepage";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetails/Productdetail";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Apphomepage from "./components/Apphomepage";
import About from "./pages/Introduction/About";
import ErrorPage from "./pages/Error/Error";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import TestProductPage from "./test/productpage";
import TestProductDetail from "./test/productdetailtest";
import EmergencyButton from "./components/EmergencyandVet/EmergencyButton";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<div className="home-page"><Homepage /></div>}/>
              <Route path="/contact" element={<div className="contact-page"><Contact /></div>}/>
              <Route path="/product" element={<Product />}/>
              <Route path="/error" element={<ErrorPage />}/>
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />}/>
              <Route path="/productdetail/:id" element={<ProductDetail />} />
              <Route path="/blog" element={<div className="blog-page"><Blog /></div>}/>

              {/* Testing Area */}
              <Route path="/testpage" element={<TestProductPage />} />
              <Route path="/testpage/:id" element={<TestProductDetail />} />
            </Routes>
            <EmergencyButton />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;