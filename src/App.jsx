/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from './actions';

import './App.css';
import CryptoGif from './components/CryptoGif';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [test, setTest] = useState('CRIOU');
  useEffect(() => {
    setInterval(() => dispatch(allActions.userActions.fetchAPI()), 10000);
    return clearInterval();
  }, []);

  return (
    <>
      <CryptoGif />
    </>
  );
}

export default App;
