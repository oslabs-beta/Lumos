import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
// gain access to context
import { InfoContext } from "../containers/MainContainer.jsx";

export default function DayButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  //run a fetch request to metric router time period 24hr
  //minus this 60 * 60 * 24 * 1000
  // start = start.toLocaleString('en-US', { timeZone: 'America/New_York' });

  // let test = new Date(start);
  // console.log('test: ', test)
  const submitHandler = (e) => {
    e.preventDefault();

    // time conversion table, built for addyrage 2.0
    // const timeConversions = {
    //   msPerSec: 1000,
    //   secPerMin: 60,
    //   minPerHr: 60,
    //   hrPerDay: 24,
    //   dayPerWeek: 7,
    //   msPerMin: 1000*60,
    //   msPerHr: 1000*60*60,
    //   msPerDay: 1000*60*60*24,
    //   msPerWeek: 1000*60*60*24*7,
    // };

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
        <Button className="LumosButton" onClick={submitHandler}>24hr</Button>
      </>
    )
 
}