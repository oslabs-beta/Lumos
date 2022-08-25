/* eslint-disable linebreak-style */
import React from 'react';

export default function GetAllMetrics() {
  return fetch('/metrics')
    .then(data => data.json())
}
