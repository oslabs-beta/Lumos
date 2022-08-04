/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';

export default function Login() {
  /*
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

  onclick event make a post request for register
  */
  return (
    <div className="loginForm">
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField id="outlined-basic" label="firstname" variant="outlined" />
      <TextField id="outlined-basic" label="lastname" variant="outlined" />
      <TextField id="outlined-basic" label="arn" variant="outlined" />
      <Button variant="contained">Register</Button>
    </div>
  );
}

