import initialState from './initialState';
import * as actions from './actionTypes';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH: {
      return {
        ...state,
        auth: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
