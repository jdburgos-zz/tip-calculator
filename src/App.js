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

/** Styles **/
import styles from './App.module.scss';

const App = () => (
  <Wrapper>
    <h1 className={styles['app__title']}>SPLITTER</h1>
    <Card>
      <Container className={styles['app__container']}>
        <BillForm />
        <TipList />
      </Container>
      <Card background="black-green" />
    </Card>
  </Wrapper>
);

export default App;
