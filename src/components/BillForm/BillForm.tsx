/** React core **/
import { useContext, useRef, useState } from 'react';

/** Components **/
import Input from '../Ui/Input/Input';

/** Contexts **/
import AppContext from '../../store/AppContext';

/** Styles **/
import styles from './BillForm.module.scss';

const BillForm = () => {
  const [error, setError] = useState(false);
  const appCtx = useContext(AppContext);
  const billRef = useRef<HTMLInputElement>(null);

  const changeBillHandler = () => {
    const billValue = billRef.current!.value.trim();

    setError(billValue === '');
    appCtx.setBill(parseInt(billValue, 10));
  };

  return (
    <div className={styles['bill-form__container']}>
      <form className={styles['bill-form']}>
        <Input
          ref={billRef}
          className={styles['bill-input-control']}
          input={{
            id: 'bill-input',
            type: 'number',
          }}
          label="Bill"
          icon="icon-dollar"
          error={error}
          onChange={changeBillHandler}
        />
      </form>
    </div>
  );
};

export default BillForm;
