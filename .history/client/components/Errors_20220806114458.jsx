/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Grid } from '@mui/material';
// :)
function Errors() {

  return (
  //   <Box className="Errors" overflow={'scroll'}>
  // <Grid container spacing={1} align="center" style={{ width: "120%", fontSize: 12 }}>
  //       <Grid item xs={3} align="center" style={{ border: "1px solid grey" }}>
  //        Errors
  //       </Grid>
  //       <Grid item xs={3} align="center" style={{ border: "1px solid grey" }}>
  //         Start
  //       </Grid>
  //       <Grid item xs={2} align="center" style={{ border: "1px solid grey" }}>
  //         End
  //       </Grid>
  //       <Grid item xs={2} align="center" style={{ border: "1px solid grey" }}>
  //         Type
  //       </Grid>
  //       <Grid item xs={2} align="center" style={{ border: "1px solid grey" }}>
  //         Cost
  //       </Grid>
  //     </Grid>
  <Box className="Errors" overflow={'scroll'}>
        <div className="err">
         Errors
        </div>
        <div className="start">
         start
        </div>
        <div className="end">
         end
        </div>
        <div className="type">
         type
        </div>
        <div className="cost">
         cost
        </div>
   
      {rows.map((row) => (
      //   <Grid
      //     container
      //     spacing={1}
      //     align="center"
      //     style={{ width: "120%", fontSize: 14 }}
      //     key={row.name}
      //   >
      //     <Grid item xs={3} align="left" style={{ border: "1px solid grey" }}>
      //       {row.name}
      //     </Grid>
      //     <Grid item xs={3} align="right" style={{ border: "1px solid grey" }}>
      //       {row.Start}
      //     </Grid>
      //     <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
      //       {row.End}
      //     </Grid>
      //     <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
      //       {row.Type}
      //     </Grid>
      //     <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
      //       {row.Cost}
      //     </Grid>
      //   </Grid>
      // ))}
          <div className="rowErr">
            {row.name}
          </div>
          <div className="rowStart">
            {row.Start}
          </div>
          <div className="rowStart">
          {row.Start}
        </div>
        <div className="rowStart">
        {row.Start}
      </div>
      <div className="rowStart">
      {row.Start}
    </div>
        
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
