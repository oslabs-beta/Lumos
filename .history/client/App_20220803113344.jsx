/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button,
} from '@mui/material';
// import Header from './components/Header.jsx';

import MainContainer from './containers/MainContainer.jsx';
import Signin from './containers/Signin.jsx';

function App() {
  return (
    <>
      {/* <Header /> */}
      <h1>
        Hello
        {' '}
      </h1>
      <MainContainer />
      <Signin />
    </>
  );
}

export default App;