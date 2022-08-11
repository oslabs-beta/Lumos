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
    console.log('I am the week button');
    fetch('/metric', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({startTime: start, endTime: end, metricName: 'Invocations', period: 86400})
    }).then((response) => response.json())
    .then(data => {
      console.log('RESPONSE DATA: ', data)
      console.log('RESPONSE DATA TYPE: ', typeof data)
      // update state obj with data values
      let sum = 0;
        data.data.forEach((el) => {
          sum += el.totalInvocations;
        });

        setUserInfo({
          lambdaFuncs: data.data,
          lambdaActiveInvocations: sum,
          lambdaTotalErrors: 6,
          lambdaAvgThrottle: 41, 
          lambdaAvgDuration: 4.2 
        });

      console.log('UPDATED STATE: ', userInfo);
  })
}
  return (
      <Button className="LumosButton" onClick={submitHandler}> 1 Week</Button>
  )
}






