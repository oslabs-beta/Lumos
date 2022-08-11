import React from 'react'
import {FormControl, Button} from '@mui/material'

export default function monthButton() {
  //run a fetch request to metric router time period 24hr
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('I am the month button');
  }
  return (
    <div>
      <Button className={LumosButton} onClick={submitHandler}> Monthly
      </Button>
      
    </div>
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

// // </FormControl>  */}