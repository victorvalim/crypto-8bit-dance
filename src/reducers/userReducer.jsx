const INITIAL_STATE = {
  time: null,
  bpi: {
    USD: 0,
    GBP: null,
    EUR: null,

  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, default: 'criou o reducer',
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
