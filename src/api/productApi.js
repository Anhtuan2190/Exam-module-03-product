import axios from "axios";

const PRODUCT_MANAGEMENT_API = "http://localhost:3001";

export const findProducts = async () => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/products`);
  } catch (e) {
    console.log("Find poducts API error" + e);
  }
  return result;
};

export const findProduct = async (productId) => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/prducts/${productId}`);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};

export const createProduct = async (product) => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/prducts`, product);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};

export const updateProduct = async (product) => {
  let result = null;
  try {
    result = await axios.get(
      `${PRODUCT_MANAGEMENT_API}/prducts/${product.id}`,
      product
    );
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};

export const deleteProduct = async (productId) => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/prducts/${productId}`);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};
