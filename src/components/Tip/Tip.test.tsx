/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Tip from './Tip';

test('should renders without crashing', () => {
  const div = document.createElement('div');
  const tip = { value: 10, type: 'tip' };

  ReactDOM.render(<Tip tip={tip} />, div);
});
