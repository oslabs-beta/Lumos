import { Container } from '@mui/material';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LineChart from '../components/charts/LineChart';

export default function MainContainer() {
  return (
    <Container>
      <Header />
      <LineChart />
      <Footer />
    </Container>
  );
}
