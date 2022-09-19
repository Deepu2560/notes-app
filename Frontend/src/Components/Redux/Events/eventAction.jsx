// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const NOTE_LOADING = "NOTE_LOADING";
export const NOTE_FAILURE = "NOTE_FAILURE";
export const NOTE_SUCCESS = "NOTE_SUCCESS";

// all functions for changing state of reducer
export const noteLoading = () => ({ type: NOTE_LOADING });
export const noteFailure = () => ({ type: NOTE_FAILURE });
export const noteSuccess = (payload) => ({ type: NOTE_SUCCESS, payload });

// function to handle fetching all notes process
export const fetchAllNotes = (dispatch, token) => {
  return function () {
    dispatch(noteLoading());
    axios
      .get("https://deepu2560-notes-app.herokuapp.com/notes/get", {
        headers: { authorization: `Bearer ${token}` },
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
        console.log("fetching notes data error:", error);
        return dispatch(noteFailure());
      });
  };
};

// adding new note to database by sending data to backend
export const addNewNote = (dispatch, token, notedata) => {
  return function () {
    axios
      .post("https://deepu2560-notes-app.herokuapp.com/notes/add", notedata, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          alert(message);
        }
        return dispatch(fetchAllNotes(dispatch, token));
      })
      .catch((error) => {
        console.log("adding new Note client side server error:", error);
      });
  };
};

// deleting one note from database
export const deleteNote = (dispatch, token, id) => {
  return function () {
    axios
      .delete(`https://deepu2560-notes-app.herokuapp.com/notes/delete/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          alert(message);
        }
        return dispatch(fetchAllNotes(dispatch, token));
      })
      .catch((error) => {
        console.log("adding new Note client side server error:", error);
      });
  };
};
