import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        alignContent: 'center',
        backgroundColor: 'gray',
      }}
    >
      Welcome back, User!
    </Box>
  );
}
