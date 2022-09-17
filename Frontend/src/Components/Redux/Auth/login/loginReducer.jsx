// importing all login action types
import { LOG_IN_LOADING, LOG_IN, LOG_IN_ERROR, LOG_OUT } from "./loginAction";

// defining initial state
const initialStore = {
  isLoading: false,
  token: "",
  isAuth: false,
  isError: false,
};

// reducer function
export const LoginReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case LOG_IN_LOADING:
      return {
        ...state,
        isLoading: true,
        token: state.token,
        isAuth: state.isAuth,
        isError: false,
      };
    case LOG_IN:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError: false,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: state.token,
        isAuth: state.isAuth,
        isError: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        token: "",
        isAuth: false,
        isError: false,
      };
    default:
      return state;
  }
};
