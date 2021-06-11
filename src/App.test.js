import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi! I'm Jack Doherty/i);
  expect(linkElement).toBeInTheDocument();
});
