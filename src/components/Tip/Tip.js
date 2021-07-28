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
  let content = `${props.tip.value}%`;

  if (props.tip.type === 'custom') {
    content = <input className={styles['tip__custom']} type="number" />;
  }

  return (
    <span onClick={selectTipHandler} className={classes}>
      {content}
    </span>
  );
};

Tip.propTypes = {
  tip: PropTypes.shape({
    value: PropTypes.number,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tip;
