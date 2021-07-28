/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import Input from '../Ui/Input/Input';

/** Styles **/
import styles from './BillForm.module.scss';

const BillForm = () => {
  const [error, setError] = useState(false);
  const billRef = useRef();

  const changeBillHandler = () => {
    const billValue = billRef.current.value.trim();

    setError(billValue === '');
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
          error={error}
          onChange={changeBillHandler}
        />
      </form>
    </div>
  );
};

export default BillForm;
