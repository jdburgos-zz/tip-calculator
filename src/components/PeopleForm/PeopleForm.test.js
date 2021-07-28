/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import PeopleForm from './PeopleForm';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PeopleForm />, div);
});
