/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Grid } from '@mui/material';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// :)
function Errors() {

  return (
    <Box className="Errors" overflow={'scroll'}>
    {/* <Table style={{ width: "90%" }} align="center">
    <TableHead>
      <TableRow>
        <TableCell style={{ border: "1px solid grey" }} align="left">
          Errors
        </TableCell>
        <TableCell style={{ border: "1px solid grey" }} align="right">
        Start
        </TableCell>
        <TableCell style={{ border: "1px solid grey" }} align="right">
          End
        </TableCell>
        <TableCell style={{ border: "1px solid grey" }} align="right">
          Type
        </TableCell>
        <TableCell style={{ border: "1px solid grey" }} align="right">
          Cost
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell style={{ border: "1px solid grey" }} align="left">
            {row.name}
          </TableCell>
          <TableCell style={{ border: "1px solid grey" }} align="right">
            {row.Start}
          </TableCell>
          <TableCell style={{ border: "1px solid grey" }} align="right">
            {row.End}
          </TableCell>
          <TableCell style={{ border: "1px solid grey" }} align="right">
            {row.Type}
          </TableCell>
          <TableCell style={{ border: "1px solid grey" }} align="right">
            {row.Cost}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table> */}
  
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
