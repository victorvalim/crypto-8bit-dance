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
const fetchAPI = () => async (dispatch) => {
const fetchAPIresponse = await (await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')).json();
console.log('entrou')
dispatch(apiResponse(fetchAPIresponse));
}
export default {
  defaultAction,
  apiResponse,
  fetchAPI,
// eslint-disable-next-line semi
}