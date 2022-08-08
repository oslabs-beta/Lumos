/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Button, Drawer} from '@mui/material';


function Sidebar() {
  return (
    <Box className="Sidebar">
      <Drawer
        variant='permanent'
        anchor='left'
      >
        <div>
          <Typography variant='h3'>
            lambda function
          </Typography>
        </div>
      </Drawer>
    </Box>
  );
}

export default Sidebar;

{/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
</g>
</svg> */}