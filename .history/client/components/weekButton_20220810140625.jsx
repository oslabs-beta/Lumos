import React from 'react'
import {FormControl, Button} from '@mui/material'

export default function weekButton() {
  //run a fetch request to metric router time period 24hr
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('I am the 24hr button');
  }
  return (
    <div>
      <Button className="LumosButton" onClick={submitHandler}> 1 Week
      </Button>
      
    </div>
  )
}






