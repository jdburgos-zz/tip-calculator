/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Total from './Total';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Total />, div);
});
