/* eslint-disable linebreak-style */
import React from 'react';
import { Button, TextField } from '@mui/material';

export default function Login() {
  return (
    <div>
      <Button onClick={handleOpen}>Sign In</Button>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <TextField id="outlined-basic" label="username" variant="outlined" />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <TextField id="outlined-basic" label="password" variant="outlined" />
    </Typography>
  </Box>
</Modal>
    </div>
  );
}

