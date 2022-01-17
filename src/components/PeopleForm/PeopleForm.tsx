/** React core **/
import { useContext, useRef, useState } from 'react';

/** Components **/
import Input from '../Ui/Input/Input';

/** Contexts **/
import AppContext from '../../store/AppContext';

/** Styles **/
import styles from './PeopleForm.module.scss';

const PeopleForm = () => {
  const [error, setError] = useState(false);
  const appCtx = useContext(AppContext);
  const peopleRef = useRef<HTMLInputElement>(null);

  const changePeopleHandler = () => {
    const peopleValue = peopleRef.current!.value.trim();

    setError(peopleValue === '');
    appCtx.setNPeople(parseInt(peopleValue, 10));
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
