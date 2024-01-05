import {
  PRODUCTISERROR,
  PRODUCTISLODING,
  PRODUCTSUCCESS,
} from "./ProductTypes";

const initialState = {
  ProductIsLoding: false,
  ProductIsError: false,
  Products: [],
  totalPages: 0,
  totalProducts: 0,
  currentPage: 0,
};




export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTISLODING:
      return { ...state, ProductIsLoding: true, ProductIsError: false };
    case PRODUCTISERROR:
      return { ...state, ProductIsLoding: false, ProductIsError: true };
    case PRODUCTSUCCESS:
      return {
        ...state,
        ProductIsLoding: false,
        ProductIsError: false,
        Products: payload.products,
        currentPage: payload.currentPage,
        totalPages: payload.totalPages,
        totalProducts: payload.totalProducts,
      };

    default:
      return state;
  }
};
