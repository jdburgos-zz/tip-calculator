/** React core **/
import React, { useState } from 'react';

/** Contexts **/
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [nPeople, setNPeople] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [total, setTotal] = useState(0);
  const [isReseted, setReset] = useState(false);

  const calcTip = ({ bill = 0, tip = 0, nPeople = 0 }) => {
    const billPerPeople = nPeople !== 0 ? bill / nPeople : 0;
    const tipPercentage = tip / 100;

    const tipAmountPerPerson = nPeople !== 0 ? (bill * tipPercentage) / nPeople : 0;
    tipPerPersonHandler(parseFloat(tipAmountPerPerson.toFixed(2)));

    // eslint-disable-next-line
    const total = billPerPeople * tipPercentage + billPerPeople;
    totalHandler(parseFloat(total.toFixed(2)));
  };

  const billHandler = (value: any) => {
    setBill(value);
    calcTip({ bill: value, tip, nPeople });
  };

  const tipHandler = (value: any) => {
    setTip(value);
    calcTip({ bill, tip: value, nPeople });
  };

  const nPeopleHandler = (value: any) => {
    setNPeople(value);
    calcTip({ bill, tip, nPeople: value });
  };

  const tipPerPersonHandler = (value: any) => {
    setTipPerPerson(value);
  };

  const totalHandler = (value: any) => {
    setTotal(value);
  };

  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setNPeople(0);
    setTipPerPerson(0);
    setTotal(0);
    setReset(true);
  };

  const appContext = {
    bill,
    tip,
    nPeople,
    tipPerPerson,
    total,
    isReseted,
    setBill: billHandler,
    setTip: tipHandler,
    setNPeople: nPeopleHandler,
    setTipPerPerson: tipPerPersonHandler,
    setTotal: totalHandler,
    reset: resetHandler,
  };

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export default AppProvider;
