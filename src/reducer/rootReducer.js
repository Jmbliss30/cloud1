import initialState from './initialState';

import appReducer from './appReducer';
import { LOGOUT_USER } from './actionTypes';

const reducer = (state = initialState, action) => {
  if (action.type === LOGOUT_USER) {
    localStorage.removeItem('DAS_FC_INTERNAL_STATE');

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default reducer;
