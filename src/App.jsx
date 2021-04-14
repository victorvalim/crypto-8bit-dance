/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useCountUp } from 'react-countup';
import allActions from './actions';

import './App.css';
import CryptoGif from './components/CryptoGif';
import CounteUp from './components/CounteUp';

function App() {
  const dolar = useSelector((state) => state.userReducer.bpi.USD.rate_float);
  const pound = useSelector((state) => state.userReducer.bpi.GBP.rate_float);
  const euro = useSelector((state) => state.userReducer.bpi.EUR.rate_float);

  const dispatch = useDispatch();
  // const { countUp } = useCountUp({
  //   end: dolar, redraw: false, duration: 1,
  // });
  // eslint-disable-next-line no-unused-vars
  const [test, setTest] = useState('CRIOU');
  useEffect(() => {
    setInterval(() => dispatch(allActions.userActions.fetchAPI()), 2000);
    const today = (new Date()).toISOString().substring(0, 10);
    dispatch(allActions.userActions.chartData(today));
    return clearInterval();
  }, []);

  return (
    <>
      <CryptoGif />
      {dolar > 0 && <CounteUp dolar={dolar} pound={pound} euro={euro} />}

    </>
  );
}

export default App;
