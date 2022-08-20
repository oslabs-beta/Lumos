import React, {useContext} from 'react'
import { Button } from '@mui/material'
import { InfoContext } from "../containers/MainContainer.jsx";


export default function WeekButton() {

  const [userInfo, setUserInfo] = useContext(InfoContext);
  //run a fetch request to metric router time period 24hr
  
  let start = new Date(Math.round(new Date().getTime()) - ((24*7) * 3600 * 1000));
  start.toISOString();
  const end = new Date();
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('I am the week button');
    fetch('/metric', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({startTime: start, endTime: end, period: 86400})
    }).then((response) => response.json())
    .then(data => {
      console.log('RESPONSE DATA: ', data)
      console.log('RESPONSE DATA TYPE: ', typeof data)
      // update state obj with data values
      let activeInvocations = 0;
      let totalErrors = 0;
      let totalDuration = 0;
      let totalCost = 0;
      data.metrics.forEach((el) => {
        activeInvocations += el.totalInvocations;
        totalErrors += el.totalErrors;
        totalDuration += el.totalDuration;
        totalCost += el.totalCost;
      });

        setUserInfo({
          lambdaFuncs: data.metrics,
          lambdaActiveInvocations: activeInvocations,
          lambdaTotalErrors: totalErrors,
          lambdaAvgThrottle: 41,
          lambdaTotalCost: totalCost, 
          // lambdaAvgDuration: totalDuration / data.data.length
          lambdaAvgDuration: totalDuration, 
        });

      // console.log('UPDATED STATE: ', userInfo);
  })
}
  return (
      <Button className="LumosButton" onClick={submitHandler}> 1 Week</Button>
  )
}






