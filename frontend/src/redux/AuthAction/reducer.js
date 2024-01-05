import {
  AUTHISERROR,
  AUTHISLODING,
  AUTHSUCCESS,
  REGISTERAUTHSUCCESS,
} from "./AuthTypes";

const initialState = {
  AuthIsLoding: false,
  AuthIsError: false,
  AuthIsAthenticated: false,
  registerd: false,
  token: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHISLODING:
      return { ...state, AuthIsLoding: true, AuthIsError: false };
    case AUTHISERROR:
      return {
        ...state,
        AuthIsLoding: false,
        AuthIsError: true,
        AuthIsAthenticated: false,
      };
    case REGISTERAUTHSUCCESS:
      return {
        ...state,
        AuthIsLoding: false,
        AuthIsError: false,
        registerd: true,
      };
    case AUTHSUCCESS:
      return {
        ...state,
        AuthIsLoding: false,
        AuthIsError: false,
        token: payload,
        AuthIsAthenticated: true,
      };

    default:
      return state;
  }
};
