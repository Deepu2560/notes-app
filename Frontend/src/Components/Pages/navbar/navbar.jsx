// importing react, hooks and files
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";

// importing bootstrap components and function of loginaction
import { Button, Container, Navbar } from "react-bootstrap";
import { logoutSuccess } from "../../Redux/Auth/login/loginAction";

export const NavbarPage = () => {
  // dispatch for using redux functions and getting isAuth from initial state of login reuducer
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  // Now HTML code display on screen
  return (
    <Container className="navbar">
      <Navbar
        expand="lg"
        variant="dark"
        bg="dark"
        style={{ paddingLeft: 10, paddingRight: 10, fontWeight: "bold" }}
      >
        <Navbar.Brand>Notes</Navbar.Brand>
        {!isAuth ? (
          <Button>LOG IN</Button>
        ) : (
          <Button onClick={() => dispatch(logoutSuccess())}>LOG OUT</Button>
        )}
      </Navbar>
    </Container>
  );
};
