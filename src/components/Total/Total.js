/** React core **/
import React from 'react';

/** Components **/
import Button from '../Button/Button';
import TotalItem from '../TotalItem/TotalItem';
import Wrapper from '../Helpers/Wrapper/Wrapper';

/** Styles **/
import styles from './Total.module.scss';

const totalItems = [
  { title: 'Tip Amount', description: '/ person', value: 4.27 },
  { title: 'Total', description: '/ person', value: 32.79 },
];

const Total = () => {
  const content = totalItems.map((item, index) => <TotalItem key={index} item={item} />);

  return (
    <Wrapper>
      <div className={styles['total__items']}>{content}</div>
      <Button text="RESET" />
    </Wrapper>
  );
};

export default Total;
