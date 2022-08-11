/* eslint-disable linebreak-style */
import React from 'react';

export default function GetAllMetrics() {
  return fetch('http://localhost:3333/list')
    .then(data => data.json())
}
