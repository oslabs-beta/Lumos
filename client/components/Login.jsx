/* eslint-disable linebreak-style */
import React, { useState, setOpen } from "react";
import { Button, TextField, Modal, Slide } from "@mui/material";
// import ModalUnstyled from '@mui/base/ModalUnstyled'

export default function Login() {
  //modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    console.log("is email not equal to a blank string ", email !== "");
    console.log("is email  equal to a blank string ", email === "");
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
      window.alert("Cannot process request All fields need to be completed");
    }
    if (
      email !== "" &&
      password !== "" &&
      firstname !== "" &&
      lastname !== ""
    ) {
      console.log("this is what you're getting back: ", data);
      window.alert(
        `Thanks for registering ${data.email} click anywhere to close`
      );

      //make a post request to somewhere with this data

      const result = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      };
      console.log(result);

      // post to user endPoint passing result to DB
      fetch("/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
            // type="password"
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            name="firstname"
            id="outlined-basic"
            label="firstname"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
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
