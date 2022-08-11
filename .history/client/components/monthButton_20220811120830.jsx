import React from 'react'
import { Button } from '@mui/material'
import { InfoContext } from "../containers/MainContainer.jsx";

export default function MonthButton() {
  //run a fetch request to metric router time period 24hr
  let start = new Date(Math.round(new Date().getTime()) - ((24*30) * 3600 * 1000));
  start.toISOString();
  const end = new Date();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('I am the month button');
    fetch('/metric', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({startTime: start, endTime: end, metricName: 'Invocations', period: 86400})
    }).then((response) => response.json())
    .then(data => {
      console.log('RESPONSE DATA: ', data)
      console.log('RESPONSE DATA TYPE: ', typeof data)
      // update state obj with data values
      setUserInfo({
        lambdaFuncs: data.data
      })

      console.log('UPDATED STATE: ', userInfo);
  })
}
  return (
      <Button className="LumosButton" onClick={submitHandler}> 30 days</Button>
  )
}




