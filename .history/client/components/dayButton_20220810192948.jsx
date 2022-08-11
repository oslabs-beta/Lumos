import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
// gain access to context
import { InfoContext } from "../containers/MainContainer.jsx";

export default function DayButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const submitHandler = (e) => {
    e.preventDefault();
      
    let start = new Date(Math.round(new Date().getTime() - (24 * 3600 * 1000)));

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
      console.log('DATA: ', data)
      console.log(typeof data)
      // update state obj with data values
      setUserInfo({
        lambdaMetrics: data.Invocations
      })

      // useEffect(() => console.log(userInfo), [userInfo]);
  })
}
  return (
      <>
        <Button className="LumosButton" onSubmit={submitHandler}>24hr</Button>
      </>
    )
 
}