import Homepage from "./pages/HomePage/Homepage";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetails/Productdetail";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Apphomepage from "./components/Apphomepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/productdetail" element={<ProductDetail />}/>
            <Route path="/blog" element={<Blog />}/>
          </Routes>
        {/* </div> */}
      </main>
    </div>

    // <div>
    //   <Navbar />
    //   <Routes>
    //     <Route index element={<Homepage />} />
    //     <Route path="/homepage" element={<Homepage />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/product" element={<Product />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/productdetail" element={<ProductDetail />} />
    //   </Routes>
    // </div>
  );
}

export default App;