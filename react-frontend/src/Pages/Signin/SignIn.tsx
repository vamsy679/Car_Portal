import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Header } from "./SignIn.styles";
import { useNavigate } from "react-router-dom";
import { CarIcon } from "../../Components/Icons/Icon";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import AuthContext from "../../context/AuthContext";

export function SignIn() {
  const navigate = useNavigate();
  const {
    loginUser,
    user,
    logoutUser,
    username,
    password,
    setUsername,
    setPassword,
  } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Container>
        <div>
          <CarIcon />
          <Header>CAR PORTAL</Header>
        </div>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={(e) => loginUser(e, username, password)}>
          Log in
        </Button>
        {/* Redirect user to signup page */}
        <div style={{ color: "white", fontSize: 16 }}>
          Not a member?
          <Link
            style={{ color: "#55dfb2", fontSize: 16, padding: 5 }}
            to="/register"
          >
            Register here!
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}
