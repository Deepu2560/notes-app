import axios from "axios";

export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

export const signupLoading = () => ({ type: SIGN_UP_LOADING });

export const signupError = () => ({ type: SIGN_UP_ERROR });

export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });

export const handlesignup = (dispatch, signupdata) => {
  return function () {
    dispatch(signupLoading());
    axios
      .post(`http://localhost:8080/auth/register`, signupdata)
      .then(({ data }) => {
        const { error, token, message } = data;
        if (error) {
          alert(message);
          dispatch(signupError());
          return;
        }
        dispatch(signupSuccess());
      })
      .catch((err) => {
        dispatch(signupError());
        console.log(err);
      });
  };
};
