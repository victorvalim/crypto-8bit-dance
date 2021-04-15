/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React from 'react';
import CountUp from 'react-countup';
// eslint-disable-next-line no-unused-vars
const CounteUp = ({
  dolar, pound, euro, funct,
}) => (
  <>

    <CountUp className="USD" onClick={funct} start={0} end={dolar} duration={4} decimals={4} decimal="." prefix="USD" separator="," preserveValue />
    <CountUp className="GPD" start={0} end={pound} duration={4} decimals={4} decimal="." prefix="GPD" separator="," preserveValue />
    <CountUp className="EUR" start={0} end={euro} duration={4} decimals={4} decimal="." prefix="EUR" separator="," preserveValue />

  </>
);

export default CounteUp;
