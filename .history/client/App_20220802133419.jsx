import React from 'react';
import { Button, Card } from '@mui/material';

class App extends React.Component {
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
