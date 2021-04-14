/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
const defaultAction = () => {
  return {
      type: 'DEFAULT',
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
const chartData = (payload) => async (dispatch) => {
  const fetchAPIresponse = await (await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=${payload}`)).json();
  dispatch(apiResponseForChart(fetchAPIresponse));
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
// eslint-disable-next-line semi
}