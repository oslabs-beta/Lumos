/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button, TextField,
} from '@mui/material';

import MainContainer from './containers/MainContainer';

function App() {
  return (
    <>
      <h1>
        Hello
        {' '}
      </h1>
      <MainContainer />
      <span>
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
      </span>
      <Button variant="contained">Sign in</Button>
    </>
  );
}

export default App;
