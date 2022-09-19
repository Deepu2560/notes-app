// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

// all functions for changing state of reducer
export const signupLoading = () => ({ type: SIGN_UP_LOADING });

export const signupError = () => ({ type: SIGN_UP_ERROR });

export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });

// function to handle login process
// sending email and password of user to backend and getting token of that user
export const handlesignup = (dispatch, signupdata) => {
  return function () {
    dispatch(signupLoading());
    axios
      .post(
        `https://deepu2560-notes-app.herokuapp.com/auth/register`,
        signupdata,
      )
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
