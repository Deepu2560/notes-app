import axios from "axios";

export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";

export const loginLoading = () => ({ type: LOG_IN_LOADING });

export const loginSuccess = (payload) => ({ type: LOG_IN, payload });

export const loginError = () => ({ type: LOG_IN_ERROR });

export const logoutSuccess = () => ({ type: LOG_OUT });

export const handlelogin = (dispatch, signupdata) => {
  return function () {
    dispatch(loginLoading());
    axios
      .post(`http://localhost:8080/auth/login`, signupdata)
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
