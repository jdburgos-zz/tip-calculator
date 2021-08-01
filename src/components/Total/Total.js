/** React core **/
import React, { useContext } from 'react';

/** Components **/
import Button from '../Button/Button';
import TotalItem from '../TotalItem/TotalItem';
import Wrapper from '../Helpers/Wrapper/Wrapper';

/** Contexts **/
import AppContext from '../../store/AppContext';

/** Styles **/
import styles from './Total.module.scss';

const Total = () => {
  const appCtx = useContext(AppContext);
  const totalItems = [
    { title: 'Tip Amount', description: '/ person', value: appCtx.tipPerPerson },
    { title: 'Total', description: '/ person', value: appCtx.total },
  ];
  const content = totalItems.map((item, index) => <TotalItem key={index} item={item} />);

  return (
    <Wrapper>
      <div className={styles['total__items']}>{content}</div>
      <Button text="RESET" onClick={appCtx.reset} />
    </Wrapper>
  );
};

export default Total;
