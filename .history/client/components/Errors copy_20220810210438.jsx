/* eslint-disable linebreak-style */
import React from 'react';

export function getAllMetrics() {
  return fetch('http://localhost:3333/list')
    .then(data => data.json())
}
