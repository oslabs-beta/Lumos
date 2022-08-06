/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Grid } from '@mui/material';
// :)
function Errors() {

  return (
    <Box className="Errors" overflow={'scroll'}>
        <div className="err">
         Errors
        </div>
        <div className="start">
          Start
        </div>
        <div className="end">
          Start
        </div>
        <div className="type">
          Start
        </div>
        <div className="cost">
          Start
        </div>
      {rows.map((row) => (
        <Box
          container
          className='Errors'
          key={row.name}
        >
          <div className="rowErr">
            {row.name}
          </div>
          <div className="rowStart">
            {row.Start}
          </div>
          <div className="rowEnd">
            {row.End}
          </div>
          <div className="rowType">
            {row.Type}
          </div>
          <div className="rowCost">
            {row.Cost}
          </div>
        </Box>
      ))}
  </Box>
  );
}
const rows = [
  { name: "Error 1", Start: 159, End: 6.0, Type: 24, Cost: 4.0},
  {
    name: "Error 2",
    Start: 237,
    End: 9.0,
    Type: 37,
    Cost: 4.3
  },
  {
    name: "Error 3",
    Start: 237,
    End: 9.0,
    Type: 37,
    Cost: 4.3
  }
]
export default Errors;
