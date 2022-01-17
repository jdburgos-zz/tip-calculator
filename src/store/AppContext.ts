/** React core **/
import React from 'react';

const AppContext = React.createContext({
  bill: 0,
  tip: 0,
  nPeople: 0,
  tipPerPerson: 0,
  total: 0,
  isReseted: false,
  setBill: (value: number) => {},
  setTip: (value: number | null) => {},
  setNPeople: (value: number) => {},
  setTipPerPerson: (value: number) => {},
  setTotal: (value: number) => {},
  reset: () => {},
});

export default AppContext;
