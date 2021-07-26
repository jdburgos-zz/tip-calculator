/** React core **/
import React from 'react';

/** Styles **/
import './styles/styles.scss';

/** Components **/
import Wrapper from './components/helpers/Wrapper/Wrapper';
import Card from './components/ui/Card/Card';

const App = () => (
  <Wrapper>
    <Card>
      <Card background="black-green" />
    </Card>
  </Wrapper>
);

export default App;
