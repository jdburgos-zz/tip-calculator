/** React core **/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Tip.module.scss';

const Tip = props => {
  const [selected, setSelected] = useState(false);

  const selectTipHandler = () => {
    setSelected(prevState => !prevState);
  };

  const selectedClass = selected ? styles['tip--selected'] : '';
  const classes = `${styles['tip']} ${selectedClass}`.trim();

  return (
    <span onClick={selectTipHandler} className={classes}>
      {props.value}%
    </span>
  );
};

Tip.propTypes = {
  value: PropTypes.number,
};

export default Tip;
