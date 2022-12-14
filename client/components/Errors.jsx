/* eslint-disable linebreak-style */
import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

// :)
function Errors() {
  const [userInfo] = useContext(InfoContext);
  let ar = [];
  
  for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
    const func = userInfo.lambdaFuncs[i];
    const label = func.funcName;
    const value = func.totalErrors;
    const timestamp = func.formattedTimeStamps
      ? func.formattedTimeStamps[0]
      : 0;
    if (value > 0) {
      ar.push({
        Label: label,
        Status: "500",
        Value: value,
        Timestamp: timestamp,
      });
    }
  }
  return (
    <Box className="Errors">
      <div className="errorsContainer">
        <Grid container spacing={0} className="errHeader">
          <Grid item xs={6} className="Errors.children Errors.Label">
            Label
          </Grid>
          <Grid
            item
            xs={2}
            className="Errors.children Errors.Count"
            sx={{ textAlign: "right" }}
          >
            Errors
          </Grid>
          <Grid
            item
            xs={4}
            className="Errors.children Errors.Time"
            sx={{ textAlign: "right" }}
          >
            Time
          </Grid>
        </Grid>

        {ar.map((a) => (
          <Grid
            container
            spacing={1}
            style={{ width: "100%", fontSize: 12 }}
            key={ar.name}
            className="ErrorsChildrenContainer"
          >
            <Grid
              item
              xs={6}
              className="Errors.children ErrB"
              sx={{ overflow: "hidden" }}
            >
              {a.Label}
            </Grid>
            <Grid
              item
              xs={2}
              className="Errors.children"
              sx={{ textAlign: "right" }}
            >
              {a.Value}
            </Grid>
            <Grid
              item
              xs={4}
              className="Errors.children"
              sx={{ textAlign: "right" }}
            >
              {a.Timestamp}
            </Grid>
          </Grid>
        ))}
      </div>
    </Box>
  );
  //
}
// new Date("August 6, 2022 13:30:30") <- needs to be sent to the backend
const today = new Date();
let date =
  today.getMonth() +
  1 +
  "-" +
  today.getDate() +
  "-" +
  today.getFullYear() +
  " T " +
  today.getHours() +
  ":" +
  today.getMinutes() +
  ":" +
  today.getSeconds();
/*
label = function that was called 
value = amount of error/ less is best
timestamp = when function status occurred 
*/

const rows = [
  {
    Label: "why",
    Status: "Complete",
    Value: 34,
    Timestamp: date,
    Cost: 4.0,
  },
  {
    Label: "why",
    Status: "Complete",
    Value: 34,
    Timestamp: date,
    Cost: 4.0,
  },
  {
    Label: "why",
    Status: "Complete",
    Value: 34,
    Timestamp: date,
    Cost: 4.0,
  },
];
export default Errors;
