/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
const defaultAction = () => {
  return {
      type: 'DEFAULT',
  }
}

const changeLoader = () => {
  return {
      type: 'LOADER',
  }
}

const apiResponse = (payload) => {
  return {
      type: 'API_RESPONSE',
      payload,
  }
}
const apiResponseForChart = (payload) => {
  return {
      type: 'API_RESPONSE_CHART',
      payload,
  }
}
const currency = (payload) => {
  return {
      type: 'CURRENCY',
      payload,
  }
}
const chartData = (payload) => async (dispatch) => {
  const fetchAPIresponse = await (await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-15&end=${payload}`)).json();
  // console.log(fetchAPIresponse);
  // const newData = fetchAPIresponse.bpi.map((element) => {
  //   const saveProperty = Object.getOwnPropertyNames(element)
  //   return { name: saveProperty[0], value: element[saveProperty[0]] }
  // })
  const obj = Object.entries(fetchAPIresponse.bpi)
  const newData = obj.map((element) => ({
    name: element[0], value: element[1],
  }))
  dispatch(apiResponseForChart(newData));
  dispatch(changeLoader());
  }
const fetchAPI = () => async (dispatch) => {
const fetchAPIresponse = await (await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')).json();
dispatch(apiResponse(fetchAPIresponse));
}
export default {
  defaultAction,
  apiResponse,
  fetchAPI,
  chartData,
  currency,
// eslint-disable-next-line semi
}