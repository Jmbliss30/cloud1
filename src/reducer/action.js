import * as actions from './actionTypes';

const setSignIn = (payload) => {
  return {
    type: actions.AUTH,
    payload,
  };
};

export { setSignIn };
