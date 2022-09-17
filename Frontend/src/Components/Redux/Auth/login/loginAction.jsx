// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";

// all functions for changing state of reducer
export const loginLoading = () => ({ type: LOG_IN_LOADING });

export const loginSuccess = (payload) => ({ type: LOG_IN, payload });

export const loginError = () => ({ type: LOG_IN_ERROR });

export const logoutSuccess = () => ({ type: LOG_OUT });

// function to handle login process
// sending email and password of user to backend and getting token of that user
export const handlelogin = (dispatch, signupdata) => {
  return function () {
    dispatch(loginLoading());
    axios
      .post(`http://localhost:8080/auth/login`, signupdata, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, token, message } = data;
        if (error) {
          alert(message);
          dispatch(loginError());
          return;
        }
        dispatch(loginSuccess(token));
        return;
      })
      .catch((err) => {
        dispatch(loginError());
        console.log(err);
        return;
      });
  };
};
