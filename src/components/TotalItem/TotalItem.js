/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './TotalItem.module.scss';

const TotalItem = props => {
  return (
    <div className={styles['total-item']}>
      <div className={styles['total-item__content']}>
        <span className={styles['total-item__title']}>{props.item.title}</span>
        <span className={styles['total-item__description']}>{props.item.description}</span>
      </div>
      <div className={styles['total-item__values']}>
        <span className={styles['total-item__value']}>${props.item.value}</span>
      </div>
    </div>
  );
};

TotalItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default TotalItem;
