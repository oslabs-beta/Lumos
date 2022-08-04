/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button, Card, Paper, TextField,
} from '@mui/material';

function App() {
  return (
    <>

      <h1>
        Hello
        {' '}
      </h1>
      <span><TextField id="outlined-basic" label="Outlined" variant="outlined" /></span>
      <Button variant="contained">this is a material UI button</Button>
    </>
  );
}

export default App;
