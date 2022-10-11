import { Paper, TextField, Stack, ButtonGroup, Button } from '@mui/material';

export default function Form() {
  return (
    <Paper component={Stack} elevation={2} width='300px' spacing={2}>
      <TextField required label='Email' type='email' />
      <TextField required label='Password' type='password' />
      <ButtonGroup fullWidth variant='contained'>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </ButtonGroup>
    </Paper>
  );
}
