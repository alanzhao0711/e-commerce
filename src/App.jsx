import Home from "./pages/Home";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register";

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/:category" element={<ProductList />}/>
        <Route exact path="/product/:id" element={<Product />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>

      </Routes>
    </Router>
  )
};

export default App;