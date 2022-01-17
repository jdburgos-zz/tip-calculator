/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Button from './Button';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Button onClick={() => {}} text="test" />, div);
});
