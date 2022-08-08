/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    arn: "",
  })

const handleChange = e => {
  setData({...data, [e.target.name]:[e.target.value]})
}

const submitHandler = e => {
  e.preventDefault()
  console.log(data)
}
  // onclick event make a post request for register
  
  return (
    <form className="loginForm" onSubmit={submitHandler}>
      <TextField onChange={handleChange} name="email" id="outlined-basic" label="email" variant="outlined" />
      <TextField onChange={handleChange} name="password" id="outlined-basic" label="password" variant="outlined" />
      <TextField onChange={handleChange} name="firstname" id="outlined-basic" label="firstname" variant="outlined" />
      <TextField onChange={handleChange} name="lastname" id="outlined-basic" label="lastname" variant="outlined" />
      <TextField onChange={handleChange} name="arn" id="outlined-basic" label="arn" variant="outlined" />
      <Button variant="contained" onClick={submitHandler}>Register</Button>
    </form>
  );
}
