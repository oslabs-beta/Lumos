/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// :)
function Errors() {

  return (
    <Box className="Errors">
<Table style={{ width: "90%" }} align="center">
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
                {row.calories}
              </TableCell>
              <TableCell style={{ border: "1px solid grey" }} align="right">
                {row.fat}
              </TableCell>
              <TableCell style={{ border: "1px solid grey" }} align="right">
                {row.carbs}
              </TableCell>
              <TableCell style={{ border: "1px solid grey" }} align="right">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </Box>
  );
}

export default Errors;
