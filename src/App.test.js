import { render, screen, fireEvent } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import App from './App';
import AddCar from './components/AddCar';
test('open add car modal form', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Carshop'));
  expect(screen.getByRole('heading')).toHaveTextContent('Carshop');
});
test('renders a snapshot', () => {
  const tree = TestRenderer.create(<AddCar />).toJSON();
  expect(tree).toMatchSnapshot();
});
