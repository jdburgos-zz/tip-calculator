/** React core **/
import React from 'react';

/** Styles **/
import styles from './TotalItem.module.scss';

type TotalItemProps = {
  item: {
    title: string;
    description: string;
    value: number;
  };
};

const TotalItem: React.FC<TotalItemProps> = ({ item }) => {
  return (
    <div className={styles['total-item']}>
      <div className={styles['total-item__content']}>
        <span className={styles['total-item__title']}>{item.title}</span>
        <span className={styles['total-item__description']}>{item.description}</span>
      </div>
      <div className={styles['total-item__values']}>
        <span className={styles['total-item__value']}>${item.value}</span>
      </div>
    </div>
  );
};

export default TotalItem;
