/* eslint-disable linebreak-style */
import React, { useState, setOpen, useContext, useEffect } from "react";
import { Button, TextField, Modal } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";
// import GetAllMetrics from './fetchMetrics.jsx'
// import ModalUnstyled from '@mui/base/ModalUnstyled'

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
    console.log("Sign in data: ", data);
    //make a post request to somewhere with this data
    const { email, password } = data;

    const result = {
      email: email,
      password: password,
    };
    console.log(result);

    fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    })
      .then((response) => response.text())
      .then((loginData) => {
        console.log('LOGIN DATA ', loginData);
        console.log(typeof loginData);
        if (loginData === "true") {
          console.l
          window.alert(`You're signed in ${data.email}`);
          //set flag to true
          setUserInfo({
            loggedIn: true,
            user_name: "",
            first_name: "",
            user_id: "",
            lambdaFuncs: [{ funcName: "", totalInvocations : 0, totalErrors: 0, timeStamps: [], funcValues: [] }],
            lambdaActiveInvocations: 0,
            lambdaTotalErrors: 0,
            lambdaAvgThrottle: 0, 
            lambdaAvgDuration: 0 
          });
          //run use effect to make a get request for all the metrics
          // const url = "/metric";
          // const fetchData = async () => {
          //     try {
          //         const response = await fetch(url);
          //         const json = await response.json();
          //         console.log('json: ', json , 'other : ',json.data);
          //         setMetrics(json.data);
          //         console.log('UPDATED STATE ', userInfo)
          //     } catch (error) {
          //         console.log("error", error);
          //     }
          // };
          // fetchData();
            

          
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
      <Button id='signin' className='LumosButton loginButton' onClick={handleOpen}>
        {" "}
        Login{" "}
      </Button>
      <Modal
        className='LoginModal'
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <form className='loginForm' onSubmit={submitHandler}>
          <TextField
            onChange={handleChange}
            name='email'
            id='outlined-basic'
            label='email'
            variant='outlined'
          />
          <TextField
            onChange={handleChange}
            type='password'
            name='password'
            id='outlined-basic'
            label='password'
            variant='outlined'
          />
          <Button variant='contained loginButton' onClick={submitHandler}>
            Sign In
          </Button>
        </form>
      </Modal>
    </>
  );
}
