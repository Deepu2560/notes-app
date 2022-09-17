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
      .post("http://localhost:8080/notes/add", notedata, {
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
      .delete(`http://localhost:8080/notes/delete/${id}`, {
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
