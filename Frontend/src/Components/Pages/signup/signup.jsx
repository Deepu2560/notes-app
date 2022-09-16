// importing react, hooks and files
import React from "react";
import "../../style/auth.css";

// importing bootstrap components
import { Container, Button, Form } from "react-bootstrap";

// main signup function return html code
export const SignupPage = () => {
  return (
    <Container className="auth">
      <Form>
        <Container id="signup-name">
          <Form.Group>
            <Form.Label className="auth-label">First name</Form.Label>
            <Form.Control className="auth-input"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="auth-label"> Last name</Form.Label>
            <Form.Control className="auth-input"></Form.Control>
          </Form.Group>
        </Container>
        <Form.Group>
          <Form.Label className="auth-label">Email Id</Form.Label>
          <Form.Control className="auth-input"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-label">Username</Form.Label>
          <Form.Control className="auth-input"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-label">Password</Form.Label>
          <Form.Control className="auth-input"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="auth-navigation">
            Already have account
          </Form.Label>
        </Form.Group>
        <Button className="auth-button">SIGN UP</Button>
      </Form>
    </Container>
  );
};
