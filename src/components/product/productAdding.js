import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addProduct, selectProductAdded } from "../../features/productSlice";

export default function ProductAdding() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAdded = useSelector(selectProductAdded);
  function handleChange(event) {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }
  function handleSubmit() {
    dispatch(addProduct(product));
    setProduct(productAdded);
    alert(`${isCreate ? "Create" : "Edit"} product ${JSON.stringify(product)}
    Successsfully!!!`);
    navigate("/");
  }

  function getBackProductList() {
    navigate("/");
  }

  return (
    <div>
      <h1>list of products</h1>
      <form>
        <div>
          <label>Product's</label>
          <input
            name="Name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name="price"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackProductList}>
          Back
        </button>
        &npsp;
        <button type="button" onClick={handleSubmit}>
          add
        </button>
      </form>
    </div>
  );
}
