/* eslint-disable linebreak-style */
import React from 'react';

// import Header from './components/Header.jsx';

import MainContainer from './containers/MainContainer.jsx';
import Signin from './components/Signin.jsx';

function App() {
  const names = ['michael', 'adnan', 'addy', 'carmen', 'mario'];
  return (
    <>
      {/* <Header /> */}
      <h1>
        Hello
        {' '}
      </h1>
      <MainContainer />
    </>
  );
}

export default App;