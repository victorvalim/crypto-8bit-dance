/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useCountUp } from 'react-countup';
import PacmanLoader from 'react-spinners/PacmanLoader';
import allActions from './actions';

import './App.css';
import CryptoGif from './components/CryptoGif';
import CounteUp from './components/CounteUp';
import Chart from './components/Chart';
import { CountUpWrapper } from './components/StyledChart';

function App() {
  const size = document.body.clientWidth;
  console.log(size);
  // const [size, setSize] = useState(sizee);
  // useEffect(() => {
  //   const sizeee = document.body.clientWidth;
  //   setSize(sizeee);
  // });
  // const [color, setColor] = useState('#fcea3f');
  const actualMoney = useSelector((state) => state.userReducer.actualMoney);
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const dolar = useSelector((state) => state.userReducer.bpi.USD.rate_float);
  const pound = useSelector((state) => state.userReducer.bpi.GBP.rate_float);
  const euro = useSelector((state) => state.userReducer.bpi.EUR.rate_float);
  const data = useSelector((state) => state.userReducer.chartData);
  const dispatch = useDispatch();
  // const { countUp } = useCountUp({
  //   end: dolar, redraw: false, duration: 1,
  // });
  // eslint-disable-next-line no-unused-vars
  const [test, setTest] = useState('CRIOU');
  useEffect(() => {
    setInterval(() => dispatch(allActions.userActions.fetchAPI()), 1000);
    setTimeout(() => {
      const today = (new Date()).toISOString().substring(0, 10);
      dispatch(allActions.userActions.chartData(today));
    }, 3000);

    return clearInterval();
  }, []);

  function clickMoney({ target: { innerText } }) {
    console.log(innerText);
    console.log(innerText.substring(0, 3));

    switch (innerText.substring(0, 3)) {
      case 'EUR':
        dispatch(allActions.userActions.currency('EUR'));
        break;
      case 'GPD':
        dispatch(allActions.userActions.currency('GPD'));
        break;
      default:
        dispatch(allActions.userActions.currency('USD'));
        break;
    }
  }

  return (
    <>
      {isLoading ? <PacmanLoader loading={isLoading} color="#fcea3f" size={200} />
        : (
          <>
            <CountUpWrapper onClick={clickMoney} money={actualMoney}>
              <CryptoGif />
              <CounteUp dolar={dolar} pound={pound} euro={euro} funct={clickMoney} money={actualMoney} />
            </CountUpWrapper>
            <Chart data={data} size={size} />
          </>
        )}
    </>
  );
}

export default App;
