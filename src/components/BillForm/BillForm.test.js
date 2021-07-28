/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import BillForm from './BillForm';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BillForm />, div);
});
