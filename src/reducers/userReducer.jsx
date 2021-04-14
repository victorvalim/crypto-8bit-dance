const INITIAL_STATE = {
  time: null,
  chartData: null,
  bpi: {
    USD: 0,
    GBP: 0,
    EUR: 0,

  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, default: 'criou o reducer',
      };
    case 'API_RESPONSE_CHART':
      return {
        ...state, chartData: action.payload,
      };
    case 'API_RESPONSE':
      return {
        ...state, time: action.payload.time, bpi: action.payload.bpi,
      };

    default:
      return state;
  }
};

export default userReducer;
