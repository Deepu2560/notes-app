// importing all signup action types
import {
  SIGN_UP_LOADING,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "./signupAction";

// defining initial state
const initialStore = {
  isLoading: false,
  isError: false,
};

// reducer function
export const SignupReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
