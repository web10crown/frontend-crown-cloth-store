import Navbar from "./layouts/Navbar";
import Home from "./view/Home";
import Products from "./view/Products";
import Product from "./view/Product";
import About from "./view/About";
import Contact from "./view/Contact";
import NewProduct from "./view/Newproduct";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/App.css" />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
