import { render, screen } from '@testing-library/react';
import ComradeFront from '../comrade/ComradeFront';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders welcome to', () => {
  render(<ComradeFront />);
  const h1Element = screen.getByText(/Welcome To/i);
  expect(h1Element).toBeInTheDocument();
});