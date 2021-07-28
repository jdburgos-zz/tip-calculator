/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import TotalItem from './TotalItem';

test('should renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    title: 'test',
    description: 'test description',
    value: 15.69,
  };

  ReactDOM.render(<TotalItem item={item} />, div);
});
