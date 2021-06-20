import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WarsawJS Workshop header', () => {
  render(<App />);
  const headerElement = screen.getByText(/WarsawJS Workshop/i);
  expect(headerElement).toBeInTheDocument();
});
