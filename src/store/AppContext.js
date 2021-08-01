/** React core **/
import React from 'react';

const AppContext = React.createContext({
  bill: 0,
  tip: 0,
  nPeople: 0,
  tipPerPerson: 0,
  total: 0,
  isReseted: false,
  // eslint-disable-next-line no-unused-vars
  setBill: value => {},
  // eslint-disable-next-line no-unused-vars
  setTip: value => {},
  // eslint-disable-next-line no-unused-vars
  setNPeople: value => {},
  // eslint-disable-next-line no-unused-vars
  setTipPerPerson: value => {},
  // eslint-disable-next-line no-unused-vars
  setTotal: value => {},
  reset: () => {},
});

export default AppContext;
