/** React core **/
import React from 'react';

/** Styles **/
import './styles/styles.scss';

/** Components **/
import Wrapper from './components/Helpers/Wrapper/Wrapper';
import Card from './components/Ui/Card/Card';
import BillForm from './components/BillForm/BillForm';
import TipList from './components/TipList/TipList';
import Container from './components/Layout/Container/Container';
import PeopleForm from './components/PeopleForm/PeopleForm';
import Total from './components/Total/Total';

/** Styles **/
import styles from './App.module.scss';

const App = () => (
  <Wrapper>
    <h1 className={styles['app__title']}>SPLITTER</h1>
    <Card>
      <Container className={styles['app__container']}>
        <BillForm />
        <TipList />
        <PeopleForm />
      </Container>
      <Card background="black-green">
        <Total />
      </Card>
    </Card>
  </Wrapper>
);

export default App;
