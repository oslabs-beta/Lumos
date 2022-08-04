/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button, TextField,
} from '@mui/material';
// import Header from './components/Header.jsx';

import MainContainer from './containers/MainContainer.jsx';

function App() {
  return (
    <>
      {/* <Header /> */}
      <h1>
        Hello
        {' '}
      </h1>
      <MainContainer />
      <Button variant="contained">Sign in</Button>
    </>
  );
}

export default App;
