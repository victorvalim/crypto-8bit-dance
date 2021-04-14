/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React from 'react';
import CountUp from 'react-countup';

// eslint-disable-next-line no-unused-vars
const CounteUp = ({ dolar, pound, euro }) => (
  <>
    <CountUp start={0} end={dolar} duration={1.5} decimals={4} decimal="." prefix="USD" separator="," preserveValue />
    {/* <CountUp start={0} end={pound} duration={1.5} decimals={4} decimal="." prefix="GPD" separator="," preserveValue />
    <CountUp start={0} end={euro} duration={1.5} decimals={4} decimal="." prefix="EUR" separator="," preserveValue /> */}
  </>
);

export default CounteUp;
