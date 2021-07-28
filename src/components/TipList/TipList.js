/** React core **/
import React from 'react';

/** Components **/
import Tip from '../Tip/Tip';

/** Styles **/
import styles from './TipList.module.scss';

const tips = [{ value: 5 }, { value: 10 }, { value: 15 }, { value: 25 }, { value: 50 }];

const TipList = () => {
  const tipList = tips.map(({ value }, index) => <Tip key={index} value={value} />);

  return (
    <div className={styles['tip-list__container']}>
      <h3 className={styles['tip-list__title']}>Select Tip %</h3>
      <div className={styles['tip-list']}>{tipList}</div>
    </div>
  );
};

export default TipList;
