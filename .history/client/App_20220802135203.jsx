/* eslint-disable linebreak-style */
import React from 'react';
import { Button, Card } from '@mui/material';

function App() {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello
          {' '}
          {name}
        </h1>
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default App;
