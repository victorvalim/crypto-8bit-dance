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
      height={340}
      data={data}
      margin={{
        top: 40, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />

      <XAxis hide />
      <YAxis />
      <Legend />
      <Tooltip />
      <Line dot={false} dataKey="value" stroke="#8884d8" />

    </LineChart>
  );
}

export default Chart;
