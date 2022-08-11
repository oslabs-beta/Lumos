import React from 'react'
import { FormControl, Button } from '@mui/material'

export default function DayButton() {
  //run a fetch request to metric router time period 24hr
  //minus this 60 * 60 * 24 * 1000
  // start = start.toLocaleString('en-US', { timeZone: 'America/New_York' });

  // let test = new Date(start);
  // console.log('test: ', test)
  const submitHandler = (e) => {
    e.preventDefault();

    let start = new Date(Math.round((new Date().getTime() - (24 * 3600 * 1000)) - 3));
    start.toISOString();

    const end = new Date();

    console.log(start);
    console.log('I am the 24hr button');

    fetch('/metric', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({startTime: start, endTime: end, metricName: 'Invocations', period: 60})
    }).then((response) => response.json())
    .then(data => {
      console.log({data})
      console.log(typeof data)
  })
}
  return (
      <>
        <Button className="LumosButton" onClick={submitHandler}>24hr</Button>
      </>
    )
 
}








// // Sample button from Astro. Using formcontrol.
// // 0.0 the fuck is form control lol :() is that a material thing? okay lemme doc it up ;)
// {/* <FormControl sx={{ m: 1, minWidth: 120 }}>

// <InputLabel>Time period</InputLabel>

//   <Select
//     labelId="demo-simple-select-helper-label"
//     id="demo-simple-select-helper"
//     value={timePeriod}
//     label="Time Period"
//     onChange={handleChange}
//   >

//     <MenuItem value="">
//       <em>None</em>
//     </MenuItem>
//     <MenuItem value='30min'>30min</MenuItem>
//     <MenuItem value='1hr'>1hr</MenuItem>
//     <MenuItem value='24hr'>24hr</MenuItem>
//     <MenuItem value='7d'>7d</MenuItem>
//     <MenuItem value='14d'>14d</MenuItem>
//     <MenuItem value='30d'>30d</MenuItem>

//   </Select>

// <FormHelperText>Choose your time period</FormHelperText>

// </FormControl>  */}ose your time period</FormHelperText>

// </FormControl>  */}