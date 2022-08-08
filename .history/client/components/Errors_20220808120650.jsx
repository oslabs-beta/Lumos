/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Grid } from '@mui/material';
// :)
function Errors() {

  return (
       <Box className="Errors" overflow={'scroll'}>
        <div className="errorsContainer">
  <Grid container spacing={1} className="errHeader">
        <Grid item xs={3} className="Errors.children">
         Errors
        </Grid>
        <Grid item xs={3} className="Errors.children">
          Start
        </Grid>
        <Grid item xs={2} className="Errors.children">
          End
        </Grid>
        <Grid item xs={2} className="Errors.children">
          Type
        </Grid>
        <Grid item xs={2} className="Errors.children">
          Cost
        </Grid>
      </Grid>
      {rows.map((row) => (
        <Grid
          container
          spacing={1}
          style={{ width: "100%", fontSize: 12 }}
          key={row.name}
          className="ErrorsChildrenContainer"
        >
          <Grid item xs={3} className="Errors.children">
            {row.name}
          </Grid>
          <Grid item xs={3} className="Errors.children">
            {row.Start}
          </Grid>
          <Grid item xs={2} className="Errors.children">
            {row.End}
          </Grid>
          <Grid item xs={2} className="Errors.children">
            {row.Type}
          </Grid>
          <Grid item xs={2} className="Errors.children">
            {row.Cost}
          </Grid>
        </Grid>
      ))}
      </div>
  </Box>
  );
//     <Box className="Errors" overflow={'scroll'}>
//       <div className="errorContainer">
//     <div className="errHeader">
//       <div className="err">
//        Errors
//       </div>
//       <div className="start">
//         Start
//       </div>
//       <div className="end">
//         End
//       </div>
//       <div className="type">
//         Type
//       </div>
//       <div className="cost">
//         Cost
//       </div>
//     </div>
//     {rows.map((row) => (
//       <Box
//         container
//         className='Errors.children'
//         key={row.name}
//       >
//         <div className="rowErr">
//           {row.name}
//         </div>
//         <div className="rowStart">
//           {row.Start}
//         </div>
//         <div className="rowEnd">
//           {row.End}
//         </div>
//         <div className="rowType">
//           {row.Type}
//         </div>
//         <div className="rowCost">
//           {row.Cost}
//         </div>
    
//       </Box>
//     ))}
//     </div>
//     </Box>
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
    End: 9.0,
    Type: 37,
    Cost: 4.3
  },
  {
    name: "Error 5",
    Start: 237,
    End: 4.0,
    Type: 37,
    Cost: 4.3
  }
]
export default Errors;
