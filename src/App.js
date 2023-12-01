import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/product/productList";
import ProductDetail from "./components/product/productDetail";
import ProductAdding from "./components/product/productAdding";
import ProductEditing from "./components/product/productEditing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path={"/product/:productId"} element={<ProductDetail />} />
        <Route path={"/product/add"} element={<ProductAdding />} />
        <Route path={`/product/edit/:productId`} element={<ProductEditing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
