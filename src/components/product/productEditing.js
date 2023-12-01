import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectProductDetail,
  editProduct,
  getProduct,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductEditing() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector(selectProductDetail);
  const success = useSelector(selectSuccess);

  const getProductDetail = async () => {
    if (productDetail == null || productDetail.id !== productId) {
      dispatch(getProduct(productId));
    } else {
      const { id, product, price } = productDetail;
      const currentProductDetail = { id, product, price };
      setProduct(currentProductDetail);
    }
  };

  useEffect(() => {
    getProductDetail();

    // eslint-disable-next-line
  }, [success]);

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editProduct(product));
    alert(
      `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
        product
      )} successfully!!!`
    );
    navigate("/");
    // window.location.reload();
  }

  function getBackProductList() {
    navigate("/");
  }

  return (
    <div>
      <h1>Product Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input
            readOnly
            name="id"
            value={product.id || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>name</label>
          <input
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>price</label>
          <input
            name="price"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackProductList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}
