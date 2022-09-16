// importing react, hooks and files
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "../../style/auth.css";

// importing bootstrap components
import { Container, Button, Form } from "react-bootstrap";
import { handlesignup } from "../../Redux/Auth/signup/signupAction";

// main signup function return html code
export const SignupPage = () => {
  // sign up data sample object
  const sampleSignup = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  };

  // dispatch to access redux and signupData state variable nad navigate to navigate from one page to different page
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState(sampleSignup);

  // handleChange to control changes of inputs
  const handleChanges = ({ name, value }) => {
    return setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // values of input elements gets stores in these variables
  const { firstname, lastname, email, username, password } = signupData;

  // HTML code display on screen
  return (
    <Container className="auth">
      <Form>
        <Container id="signup-name">
          <Form.Group>
            <Form.Label className="auth-label">First name</Form.Label>
            <Form.Control
              className="auth-input"
              type="text"
              defaultValue={firstname}
              name="firstname"
              onChange={({ target }) => handleChanges(target)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="auth-label"> Last name</Form.Label>
            <Form.Control
              className="auth-input"
              type="text"
              defaultValue={lastname}
              name="lastname"
              onChange={({ target }) => handleChanges(target)}
            />
          </Form.Group>
        </Container>
        <Form.Group>
          <Form.Label className="auth-label">Email Id</Form.Label>
          <Form.Control
            className="auth-input"
            type="text"
            defaultValue={email}
            name="email"
            onChange={({ target }) => handleChanges(target)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-label">Username</Form.Label>
          <Form.Control
            className="auth-input"
            type="text"
            defaultValue={username}
            name="username"
            onChange={({ target }) => handleChanges(target)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-label">Password</Form.Label>
          <Form.Control
            className="auth-input"
            type="password"
            defaultValue={password}
            name="password"
            onChange={({ target }) => handleChanges(target)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-navigation" onClick={() => navigate("/")}>
            Already have account
          </Form.Label>
        </Form.Group>
        <Button
          className="auth-button"
          onClick={() => dispatch(handlesignup(dispatch, signupData))}
        >
          SIGN UP
        </Button>
      </Form>
    </Container>
  );
};
