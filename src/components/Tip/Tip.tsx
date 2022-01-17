/** React core **/
import React, { useContext, useRef, useState } from 'react';

/** Components **/
import Input from '../Ui/Input/Input';

/** Styles **/
import styles from './Tip.module.scss';

/** Contexts **/
import AppContext from '../../store/AppContext';

type TipProps = {
  tip: {
    type: string;
    value: number | null;
  };
};

const Tip: React.FC<TipProps> = ({ tip }) => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const customTipRef = useRef<HTMLInputElement>(null);
  const appCtx = useContext(AppContext);

  const selectTipHandler = () => {
    setSelected(prevState => !prevState);
    appCtx.setTip(tip.value);
  };

  const customTipHandler = (): void => {
    const customTipValue = customTipRef.current!.value.trim();

    setError(customTipValue === '');
    appCtx.setTip(parseInt(customTipValue, 10));
  };

  const selectedClass = selected && !appCtx.isReseted ? styles['tip--selected'] : '';
  const classes = `${styles.tip} ${selectedClass}`.trim();
  let content = <span onClick={selectTipHandler} className={classes}>{`${tip.value}%`}</span>;

  if (tip.type === 'custom') {
    content = (
      <Input
        ref={customTipRef}
        className={styles.tip__custom}
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

export default Tip;
