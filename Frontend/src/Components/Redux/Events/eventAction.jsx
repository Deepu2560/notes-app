import axios from "axios";

export const NOTE_LOADING = "NOTE_LOADING";
export const NOTE_FAILURE = "NOTE_FAILURE";
export const NOTE_SUCCESS = "NOTE_SUCCESS";

export const noteLoading = () => ({ type: NOTE_LOADING });
export const noteFailure = () => ({ type: NOTE_FAILURE });
export const noteSuccess = (payload) => ({ type: NOTE_SUCCESS, payload });

export const fetchAllNotes = (dispatch, token) => {
  return function () {
    dispatch(noteLoading());
    axios
      .get("http://localhost:8080/notes/get", {
        headers: { authorization: token },
      })
      .then(({ data }) => {
        const { error, event, message } = data;

        if (error) {
          alert(message);
          return dispatch(noteFailure());
        }
        return dispatch(noteSuccess(event));
      })
      .catch((error) => {
        alert(
          "Error! Something went wrong please try log out and login again.",
        );
        console.log("fetching notes data error:", error);
        return dispatch(noteFailure());
      });
  };
};
