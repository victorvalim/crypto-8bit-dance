const INITIAL_STATE = {
  time: null,
  actualMoney: 'USD',
  chartData: [],
  bpi: {
    USD: 0,
    GBP: 0,
    EUR: 0,

  },
  isLoading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, default: 'criou o reducer',
      };

    case 'CURRENCY':
      return {
        ...state, actualMoney: action.payload,
      };
    case 'API_RESPONSE_CHART':
      return {
        ...state, chartData: action.payload,
      };
    case 'API_RESPONSE':
      return {
        ...state, time: action.payload.time, bpi: action.payload.bpi,
      };
    case 'LOADER':
      return {
        ...state, isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
