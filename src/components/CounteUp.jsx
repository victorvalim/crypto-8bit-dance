/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React from 'react';
import CountUp from 'react-countup';
// eslint-disable-next-line no-unused-vars
const CounteUp = ({
  dolar, pound, euro, funct, time,
}) => (
  <>

    <CountUp className="USD" onClick={funct} start={0} end={dolar} duration={3} decimals={4} decimal="." prefix="USD " separator="," preserveValue />
    <CountUp className="GPD" start={0} end={pound} duration={3} decimals={4} decimal="." prefix="GPD " separator="," preserveValue />
    <CountUp className="EUR" start={0} end={euro} duration={3} decimals={4} decimal="." prefix="EUR " separator="," preserveValue />
    <h4>
      {'Last update '}
      {time.updateduk}
    </h4>
  </>
);

export default CounteUp;
