import axios from "axios";
import {
  PRODUCTISERROR,
  PRODUCTISLODING,
  PRODUCTSUCCESS,
} from "./ProductTypes";
const baseUrl = "https://nutty-jersey-fox.cyclic.app";

export const getProducts =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCTISLODING });
      const response = await axios.get(`${baseUrl}/api/products`, {
        params: {
          gender: params.gender,
          category: params.category,
          sortOrder: params.sortOrder,
          search: params.search,
          page: params.page,
        },
      });
      // console.log(response.data);
      dispatch({ type: PRODUCTSUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PRODUCTISERROR });
    }
  };

export const patchProduct = (_id, obj) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTISLODING });
    await axios.patch(`${baseUrl}/api/products/${_id}`, obj);

    await getProducts();
  } catch (error) {
    dispatch({ type: PRODUCTISERROR });
  }
};
export const deleteProduct = (_id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTISLODING });
    await axios.delete(`${baseUrl}/api/products/${_id}`);

    await getProducts();
  } catch (error) {
    dispatch({ type: PRODUCTISERROR });
  }
};

export const AddProduct = (obj) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTISLODING });
    await axios.post(`${baseUrl}/api/products`, obj);
    await getProducts();
  } catch (error) {
    dispatch({ type: PRODUCTISERROR });
  }
};
