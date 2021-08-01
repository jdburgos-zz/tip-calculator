/** React core **/
import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/** Components **/
import Input from '../Ui/Input/Input';

/** Styles **/
import styles from './Tip.module.scss';
import AppContext from '../../store/AppContext';

const Tip = props => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const customTipRef = useRef();
  const appCtx = useContext(AppContext);

  const selectTipHandler = () => {
    setSelected(prevState => !prevState);
    appCtx.setTip(props.tip.value);
  };

  const customTipHandler = () => {
    const customTipValue = customTipRef.current.value.trim();

    setError(customTipValue === '');
    appCtx.setTip(parseInt(customTipValue, 10));
  };

  const selectedClass = selected && !appCtx.isReseted ? styles['tip--selected'] : '';
  const classes = `${styles['tip']} ${selectedClass}`.trim();
  let content = <span onClick={selectTipHandler} className={classes}>{`${props.tip.value}%`}</span>;

  if (props.tip.type === 'custom') {
    content = (
      <Input
        ref={customTipRef}
        className={styles['tip__custom']}
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
