/* eslint-disable linebreak-style */
import React from 'react';
import { Button, TextField } from '@mui/material';

export default function Login() {
  /* */
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

