/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import Input from '../Ui/Input/Input';

/** Styles **/
import styles from './PeopleForm.module.scss';

const PeopleForm = () => {
  const [error, setError] = useState(false);
  const peopleRef = useRef();

  const changePeopleHandler = () => {
    const peopleValue = peopleRef.current.value.trim();

    setError(peopleValue === '');
  };

  return (
    <div className={styles['people-form__container']}>
      <form className={styles['people-form']}>
        <Input
          ref={peopleRef}
          className={styles['people-input-control']}
          input={{
            id: 'people-input',
            type: 'number',
          }}
          label="Number of People"
          icon="icon-person"
          error={error}
          onChange={changePeopleHandler}
        />
      </form>
    </div>
  );
};

export default PeopleForm;
