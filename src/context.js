import React, { useContext, createContext, useReducer, useEffect } from 'react';
import initialState from './reducer/initialState';
import reducer from './reducer/rootReducer';

const StateContext = createContext();

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('DAS_FC_INTERNAL_STATE');
    return stateStr ? JSON.parse(stateStr) : initialState;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, loadFromLocalStorage());
  useEffect(() => {
    localStorage.setItem('DAS_FC_INTERNAL_STATE', JSON.stringify(state));
  }, [state]);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
const useGlobalState = () => useContext(StateContext);

export { StateProvider, useGlobalState as default };
