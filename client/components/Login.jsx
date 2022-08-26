/* eslint-disable linebreak-style */
import React, { useState, setOpen, useContext } from "react";
import { Button, TextField, Modal, Slide } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";
// import ModalUnstyled from '@mui/base/ModalUnstyled'

export default function Login() {
  //modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //container info
  const [userInfo, setUserInfo] = useContext(InfoContext);
  //register user state
  const [data, setData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  //register user handle change event
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //register user on submit
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password, firstname, lastname } = data;
    if (
      email === "" ||
      password === "" ||
      firstname === "" ||
      lastname === ""
    ) {
      setData({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      });
      handleClose();
      window.alert("Cannot process request. All fields need to be completed");
    }
    if (
      email !== "" &&
      password !== "" &&
      firstname !== "" &&
      lastname !== ""
    ) {
      console.log("this is what you're getting back: ", data);
      window.alert(
        `Thanks for registering ${data.firstname}. Click anywhere to close.`
      );

      const result = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      };

      // post to user endPoint passing result to DB
      fetch("/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        },
        body: JSON.stringify(result),
      }).then((h) => console.log("added", { h }));
      // */

      handleClose();
    }
  };
  // onclick event makes a post request for register
  return (
    <>
      <Button className="LumosButton" onClick={handleOpen}>
        {" "}
        Register{" "}
      </Button>

      <Modal
        className="LoginModal"
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <form className="loginForm" onSubmit={submitHandler}>
          <TextField
            onChange={handleChange}
            required
            name="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            type="password"
            placeholder="password"
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            name="firstname"
            id="outlined-basic"
            label="firstname"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            name="lastname"
            id="outlined-basic"
            label="lastname"
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={submitHandler}
            className="ModalButton"
          >
            Register
          </Button>
        </form>
      </Modal>
    </>
  );
}
