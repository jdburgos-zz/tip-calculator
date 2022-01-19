/** React core **/
import React from 'react';

type AppContextType = {
  bill: number;
  tip: number;
  nPeople: number;
  tipPerPerson: number;
  total: number;
  isReset: boolean;
  setBill: (value: number) => void;
  setTip: (value: number) => void;
  setNPeople: (value: number) => void;
  setTipPerPerson: (value: number) => void;
  setTotal: (value: number) => void;
  reset: () => void;
};

const AppContext = React.createContext<AppContextType>({
  bill: 0,
  tip: 0,
  nPeople: 0,
  tipPerPerson: 0,
  total: 0,
  isReset: false,
  setBill: value => {},
  setTip: value => {},
  setNPeople: value => {},
  setTipPerPerson: value => {},
  setTotal: value => {},
  reset: () => {},
});

export default AppContext;
