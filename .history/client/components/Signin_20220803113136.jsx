/* eslint-disable linebreak-style */
import React from 'react';
import { button, TextField } from '@mui/material';

export default function Signin() {
  return (
    <span>
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
    </span>
  );
}
