import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Container, Header } from "./SignIn.styles";
import { useNavigate } from "react-router-dom";
import { CarIcon } from "../../Components/Icons/Icon";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import { useForm } from "react-hook-form";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();

  // Login function on Sign in
  const handleSignup = async () => {
    if (password === resetPassword) {
      fetch("http://localhost:8000/account/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log("token", data);
          data.username ? setToken(data.username) : setToken(data.message);
        })

        .catch((error) => console.error(error));
    } else return setError("passwords do not match");
  };

  const handleUserNameChange = (e: any) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleFirstNameChange = (e: any) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleResetPasswordChange = (e: any) => {
    e.preventDefault();
    setResetPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        {token ? (
          <h1 style={{ color: "white" }}>{token}</h1>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <CarIcon width={216} height={216} />
              <Header>CAR PORTAL</Header>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUserNameChange}
            />
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              type="text"
              placeholder="Re-enter Password"
              value={resetPassword}
              onChange={handleResetPasswordChange}
            />
            <Button onClick={handleSignup}>SignUp</Button>
            <h1 style={{ color: "red" }}>{error}</h1>
          </div>
        )}
        <Link
          style={{ color: "#55dfb2", fontSize: 16, padding: 5 }}
          to="/login"
        >
          Login!
        </Link>
      </Container>
    </React.Fragment>
  );
}
