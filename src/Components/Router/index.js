import { Route, Routes } from "react-router-dom";

import HomePage from "../../Pages/HomePage";
import Product from "../../Pages/Product";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/my-team-project/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router;