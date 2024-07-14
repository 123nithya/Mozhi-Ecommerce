import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blogs from './Pages/Blogs';
import CompareProducts from './Pages/CompareProducts';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/termsAndCondition" element={<TermsAndConditions />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
