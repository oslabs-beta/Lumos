/* eslint-disable linebreak-style */
import React, { useState, setOpen } from "react";
import { Button, TextField, Modal } from "@mui/material";
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
    console.log("this is what you're getting back: ", data);
    window.alert(`Thanks for registering ${data.firstname} click anywhere to close`);
    //make a post request to somewhere with this data
    // const result = { email, password, firstname, lastname }
    
    // /*
    // post to user endPoint passing result to DB
      fetch('/user', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
    })
    
    
 handleClose();
  };
  // onclick event make a post request for register

  return (
    <>
      <Button className='LumosButton' onClick={handleOpen}>
        {" "}
        Register{" "}
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
          <TextField
            onChange={handleChange}
            name='firstname'
            id='outlined-basic'
            label='firstname'
            variant='outlined'
          />
          <TextField
            onChange={handleChange}
            name='lastname'
            id='outlined-basic'
            label='lastname'
            variant='outlined'
          />
          <Button variant='contained' onClick={submitHandler}>
            Register
          </Button>
        </form>
      </Modal>
    </>
  );
}
