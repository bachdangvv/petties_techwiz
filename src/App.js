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
    // <div className="App">
    //   <Navbar />
    //   <main>
    //     {/* <div className="container"> */}
    //       <Routes>
    //          <Route index element={<Homepage />} />
    //          <Route path="/homepage" element={<Homepage />} />
    //          <Route path="/product" element={<Product />} />
    //          <Route path="/blog" element={<Blog />} />
    //          <Route path="/contact" element={<Contact />} />
    //          <Route path="/cart" element={<Cart />} />
    //          <Route path="/introduction" element={<Introduction />} />
    //          <Route path="/product-detail" element={<ProductDetail />} />
    //          <Route path="/page-not-found" element={<ErrorPage />} />
    //        </Routes>
    //     {/* </div> */}
    //   </main>
    // </div>

    <div>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;