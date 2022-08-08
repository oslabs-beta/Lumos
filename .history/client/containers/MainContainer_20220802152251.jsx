/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid, Container, AppBar, Box,
} from '@mui/material';

export function MainContainer() {
  return (
    <Grid container sx={outerGridContainer}>
      <InfoContext.Provider value={[userInfo, setUserInfo]}>
        <Box item sx={{ gridArea: 'Header' }}>
          <Header />
        </Box>
        <Grid container sx={innerGridContainer}>
          <Paper item className="gridCard" sx={{ gridArea: 'Profile' }}>
            <WelcomeUser />
          </Paper>
          <Paper item className="gridCard" sx={{ gridArea: 'Monthly' }}>
            <MonthlySpendingCard />
          </Paper>
          <Paper item className="gridCard" sx={{ gridArea: 'Category' }}>
            <CategorySpendingCard />
          </Paper>
          <Paper item className="gridCard" sx={{ gridArea: 'Annual', overflowY: 'auto' }}>
            <AnnualForecastCard />
          </Paper>
          <Paper item className="gridCard" sx={{ gridArea: 'CashFlow' }}>
            <CashflowCard />
          </Paper>
          <Paper item className="gridCard" sx={{ gridArea: 'Transactions', overflowY: 'auto' }}>
            <TransactionsCard />
          </Paper>
        </Grid>

        <Box item sx={{ gridArea: 'Footer' }}>
          <Footer />
        </Box>
      </InfoContext.Provider>
    </Grid>
  );
}

export default MainContainer;
