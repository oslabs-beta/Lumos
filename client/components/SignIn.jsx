/* eslint-disable linebreak-style */
import React, { useState, setOpen, useContext, useEffect } from "react";
import { Button, TextField, Modal } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

export default function Sign() {
  //use effect hook on successful login get all metrics
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [metrics, setMetrics] = useState([]);

  //modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //register user state
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //register user handle change event
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // onclick event make a post request for login
  const submitHandler = (e) => {
    e.preventDefault();

    //make a post request to somewhere with this data
    const { email, password } = data;

    const result = {
      email: email,
      password: password,
    };

    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((response) => response.json())
      .then((loginData) => {
        const { verifiedUser, firstName, lastName } = loginData;

        if (verifiedUser == true) {
          window.alert(`You're signed in ${data.email}`);
          //set flag to true
          setUserInfo({
            timePeriod: "day",
            loggedIn: true,
            user_name: "",
            first_name: firstName,
            last_name: lastName,
            user_id: "",
            lambdaFuncs: [
              {
                funcName: "",
                totalInvocations: 0,
                totalErrors: 0,
                timeStamps: [],
                funcValues: [],
              },
            ],
            lambdaActiveInvocations: 0,
            lambdaTotalErrors: 0,
            lambdaTotalCost: 0,
            lambdaAvgDuration: 0,
          });
        } else {
          window.alert(
            "Email is not registered or the password is incorrect, please try again."
          );
        }
      })
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <>
      <Button
        id="signin"
        className="LumosButton loginButton"
        onClick={handleOpen}
      >
        {" "}
        Login{" "}
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
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <Button
            variant="contained loginButton ModalButton"
            onClick={submitHandler}
          >
            Sign In
          </Button>
        </form>
      </Modal>
    </>
  );
}
