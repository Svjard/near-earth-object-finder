import React, { useContext, useReducer, createContext, useMemo } from 'react';
import reducer from './reducer';
import { setStartDate, setEndDate, setSearch } from './actions';

export const initialState = {
  startDate: '2021-10-01',
  endDate: '2021-10-05',
  search: '',
};

const Context = createContext({
  state: initialState,
  dispatch: (_) => {},
});

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, props.initialState || initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export function useGlobalState() {
  const { state, dispatch } = useContext(Context);
  const actions = useMemo(() => {
    return {
      setStartDate: setStartDate(dispatch),
      setEndDate: setEndDate(dispatch),
      setSearch: setSearch(dispatch),
    };
  }, [dispatch]);
  const globalState = useMemo(() => {
    return {
      state,
      ...actions,
    };
  }, [state, actions]);

  return globalState;
}
