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

/** Providers **/
import AppProvider from './store/AppProvider';

/** Styles **/
import styles from './App.module.scss';

const App = () => (
  <AppProvider>
    <Wrapper>
      <h1 className={styles.app__title}>SPLITTER</h1>
      <Card className={styles['app__main-card']}>
        <Container className={styles.app__container}>
          <BillForm />
          <TipList />
          <PeopleForm />
        </Container>
        <Card className={styles.app__total} background="black-green">
          <Total />
        </Card>
      </Card>
    </Wrapper>
  </AppProvider>
);

export default App;
