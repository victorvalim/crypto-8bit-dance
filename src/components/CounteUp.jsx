/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React from 'react';
import CountUp from 'react-countup';

// eslint-disable-next-line no-unused-vars
const CounteUp = ({ number }) => (
  <CountUp start={0} end={number} duration={1.5} decimals={4} decimal="." prefix="USD" separator="," preserveValue />
);

export default CounteUp;
