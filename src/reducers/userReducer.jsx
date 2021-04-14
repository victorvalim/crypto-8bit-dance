const INITIAL_STATE = {

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
