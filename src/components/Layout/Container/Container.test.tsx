/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Container from './Container';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Container className="test-class">
      <div>Container</div>
    </Container>,
    div,
  );
});
