/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Grid } from '@mui/material';
// :)
function Errors() {

  return (
    <Box className="Errors" overflow={'scroll'}>
    <div className="Errors.header">
      <div className="err">
       Errors
      </div>
      <div className="start">
        Start
      </div>
      <div className="end">
        End
      </div>
      <div className="type">
        Type
      </div>
      <div className="cost">
        Cost
      </div>
    </div>
    {rows.map((row) => (
      <Box
        container
        className='Errors.children'
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
  //     {rows.map((row) => (
  //       <Grid
  //         container
  //         spacing={1}
  //         align="center"
  //         style={{ width: "120%", fontSize: 14 }}
  //         key={row.name}
  //       >
  //         <Grid item xs={3} align="left" style={{ border: "1px solid grey" }}>
  //           {row.name}
  //         </Grid>
  //         <Grid item xs={3} align="right" style={{ border: "1px solid grey" }}>
  //           {row.Start}
  //         </Grid>
  //         <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
  //           {row.End}
  //         </Grid>
  //         <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
  //           {row.Type}
  //         </Grid>
  //         <Grid item xs={2} align="right" style={{ border: "1px solid grey" }}>
  //           {row.Cost}
  //         </Grid>
  //       </Grid>
  //     ))}
  // </Box>
  // );
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
  },
  {
    name: "Error 4",
    Start: 237,
    End: 4.0,
    Type: 37,
    Cost: 4.3
  }
]
export default Errors;
