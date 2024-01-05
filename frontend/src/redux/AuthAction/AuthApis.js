import {
  AUTHISERROR,
  AUTHISLODING,
  AUTHSUCCESS,
  REGISTERAUTHSUCCESS,
} from "./AuthTypes";
import axios from "axios";

const baseUrl = "https://nutty-jersey-fox.cyclic.app/";

export const LoginApi = (obj) => async (dispatch) => {
  try {
    dispatch({ type: AUTHISLODING });
    const response = await axios.post(`${baseUrl}/api/login`, obj);
    console.log(response.data);
    dispatch({ type: AUTHSUCCESS, payload: response.data.token });
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: AUTHISERROR });
  }
};

export const RegisterApi = (obj) => async (dispatch) => {
  try {
    dispatch({ type: AUTHISLODING });
    const response = await axios.post(`${baseUrl}/api/register`, obj);
    console.log(response.data);
    dispatch({ type: REGISTERAUTHSUCCESS });
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: AUTHISERROR });
  }
};
