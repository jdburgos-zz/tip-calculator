/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import TipList from './TipList';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TipList />, div);
});
