import { Container } from '@mui/material';
import { useState } from 'react';

import Form from '../components/Form';
import Footer from '../components/Footer';

export default function Access() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <Footer />
    </Container>
  );
}
