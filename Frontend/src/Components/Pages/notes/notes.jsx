// importing all required hooks and files
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./notes.css";

// importing bootstrap components and redux functions
import { Button, Container, Form } from "react-bootstrap";
import {
  fetchAllNotes,
  addNewNote,
  deleteNote,
} from "../../Redux/Events/eventAction";

// main Notes page
export const NotesPage = () => {
  // getting token, isAuth and notes from redux
  const { token, isAuth } = useSelector((state) => state.login);
  const { notes } = useSelector((state) => state.event);

  // dispatch to access redux action functions
  const dispatch = useDispatch();

  // useEffect to get data on coming to notes page
  useEffect(() => {
    if (isAuth) dispatch(fetchAllNotes(dispatch, token));
  }, [token]);

  // noteData state variable and its saample data format
  const noteSample = { title: "", description: "" };
  const [noteData, setNoteData] = useState(noteSample);

  // handleChange and handleSubmit function to handle changes in input tags and add new notes
  const handleChange = ({ name, value }) => {
    setNoteData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if ((title, description)) {
      return dispatch(addNewNote(dispatch, token, noteData));
    }
  };

  // values of title and description input tags
  const { title, description } = noteData;

  // Main HTML codes
  return (
    <Container>
      <Container>
        <h1
          style={{
            color: "black",
            fontWeight: "bolder",
            textDecoration: "underline double",
          }}
        >
          New notes
        </h1>
        <Form className="notes-form">
          {/* title input tag */}
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter note title..."
            className="notes-form-input"
            defaultValue={title}
            onChange={({ target }) => handleChange(target)}
          />
          {/* description textarea */}
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter note here..."
            name="description"
            className="notes-form-input"
            defaultValue={description}
            onChange={({ target }) => handleChange(target)}
          />
          {/* button to add new note to database */}
          <Button
            variant="dark"
            className="notes-form-button"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Form>
      </Container>
      {/* if(notes is available for this user then show all notes else show no data found) */}
      {notes.length ? (
        <Container className="notes">
          {notes.map(({ item, _id }, idx) => {
            return (
              <Container key={_id} className="all-notes-main">
                {" "}
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteNote(dispatch, token, _id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </Button>
              </Container>
            );
          })}
        </Container>
      ) : (
        <Container className="all-notes-main">
          <h1>NO DATA FOUND</h1>
          <p>Start adding notes</p>
        </Container>
      )}
    </Container>
  );
};
