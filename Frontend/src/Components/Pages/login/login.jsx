// importing all required hooks and files
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";

// importing bootstrap elements and handlelogin function from loginAction
import { Button, Container, Form } from "react-bootstrap";
import { handlelogin } from "../../Redux/Auth/login/loginAction";

// LoginPage main functional components
export const LoginPage = () => {
  // sample Login object
  const sampleLogin = { email: "", password: "" };

  // creating state variable of loginData
  const [loginData, setLoginData] = useState(sampleLogin);

  // dispatch use all redux action functions and handle initail state of that reducer
  const dispatch = useDispatch();

  // handle change function it handles all changes in input tags
  const handleChanges = ({ name, value }) => {
    return setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const { email, password } = loginData;

  // HTML code display on screen
  return (
    <Container className="login">
      <Form>
        {/* email label and input tag */}
        <Form.Group>
          <Form.Label className="login-label">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            className="login-input"
            onChange={({ target }) => handleChanges(target)}
          />
        </Form.Group>
        {/* password label and input tag */}
        <Form.Group>
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            className="login-input"
          />
        </Form.Group>
        {/* by clicking on this you can be directed to signup form */}
        <Form.Group>
          <Form.Label className="login-signup-navigation">
            Don't have account
          </Form.Label>
        </Form.Group>
        {/* login button */}
        <Button
          className="login-button"
          onClick={() => dispatch(handlelogin(dispatch, loginData))}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};
