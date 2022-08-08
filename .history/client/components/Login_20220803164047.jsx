/* eslint-disable linebreak-style */
import React from 'react';
import { Button, TextField } from '@mui/material';

export default function Login() {
  return (
    <div>
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField id="outlined-basic" label="firstname" variant="outlined" />
      <TextField id="outlined-basic" label="lastname" variant="outlined" />
      <TextField id="outlined-basic" label="arn" variant="outlined" />
      <Button variant="contained">Sign in</Button>
      
    </div>
  );
}

