/* eslint-disable linebreak-style */
import React, {useContext} from 'react';
import { Box, Grid } from '@mui/material';
import { InfoContext } from "../containers/MainContainer.jsx";

// :)
function Errors() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  return (
       <Box className="Errors">
        
        <div className="errorsContainer">
  <Grid container spacing={0} className="errHeader">
        
        <Grid item xs={3} className="Errors.children">
         Label
        </Grid>
        <Grid item xs={3} className="Errors.children">
        Status
        </Grid>
        <Grid item xs={2} className="Errors.children">
          Value
        </Grid>
        {/* <Grid item xs={2} className="Errors.children">
          Cost
        </Grid> */}
        <Grid item xs={4} className="Errors.children">
        Timestamp
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
            {row.Label}
          </Grid>
          <Grid item xs={3} className="Errors.children">
            {row.Status}
          </Grid>
          <Grid item xs={2} className="Errors.children">
            {row.Value}
          </Grid>
          {/* <Grid item xs={2} className="Errors.children">
            {row.Cost}
          </Grid> */}
          <Grid item xs={4} className="Errors.children">
            {row.Timestamp}
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
let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()+' T '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();;
/*
label = function that was called 
status = whether the function is still running, completed or errored
value = amount of error/ less is best
timestamp = when function status occurred 
*/
// const rows = [
//   { Label: "Error 1", Status: 'Complete', Value: 34, Timestamp: date, Cost: 4.0},{ Label: "Error 2", Status: 159, Value: 17, Timestamp: date, Cost: 4.0},{ Label: "Error 3", Status: 159, Value: 45, Timestamp: date, Cost: 4.0},{ Label: "Error 4", Status: 159, Value: 29, Timestamp: date, Cost: 4.0},
// ]
export default Errors;
