import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectProductList,
  setSuccess,
  getProducts,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProductList);
  const getProductList = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getProductList();
    // eslint-disable-next-line
  }, []);
  function handleCreate(e) {
    e.preventDefault();
    navigate("/product/add");
  }
  return (
    <div>
      <h1>Books</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>price</th>
            <th colSpan={2}>
              <button type="button" onClick={handleCreate}>
                Create
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.price} </td>
              <td>
                <Link to={`/product/${product.id}`}>Detail</Link>
              </td>
              <td>
                <Link to={`/book/edit/${product.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
