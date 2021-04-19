/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Tooltip,
} from 'recharts';

function Chart({ data, size }) {
  return (
    <LineChart
      width={size}
      height={250}
      data={data}
      margin={{
        top: 0, right: 30, left: 20, bottom: 1,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />

      <XAxis hide dataKey="name" />
      <YAxis />
      <Tooltip formatter={(value, name) => [`$${value}`, `${name}`]} />
      <Line dot={false} dataKey="value" stroke="#8884d8" />

    </LineChart>
  );
}

export default Chart;
