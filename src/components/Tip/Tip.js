/** React core **/
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

/** Components **/
import Input from '../Ui/Input/Input';

/** Styles **/
import styles from './Tip.module.scss';

const Tip = props => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const customTipRef = useRef();

  const selectTipHandler = () => {
    setSelected(prevState => !prevState);
  };

  const customTipHandler = () => {
    const customTipValue = customTipRef.current.value.trim();

    setError(customTipValue === '');
  };

  const selectedClass = selected ? styles['tip--selected'] : '';
  const classes = `${styles['tip']} ${selectedClass}`.trim();
  let content = <span onClick={selectTipHandler} className={classes}>{`${props.tip.value}%`}</span>;

  if (props.tip.type === 'custom') {
    content = (
      <Input
        className={styles['tip__custom']}
        ref={customTipRef}
        input={{
          id: 'custom-tip-input',
          type: 'number',
          placeholder: 'Custom',
        }}
        error={error}
        onChange={customTipHandler}
      />
    );
  }

  return content;
};

Tip.propTypes = {
  tip: PropTypes.shape({
    value: PropTypes.number,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tip;
