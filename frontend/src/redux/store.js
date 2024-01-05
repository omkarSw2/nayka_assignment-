import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import AuthReducer from "./AuthAction/reducer";
import ProductReducer from "./Product/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
