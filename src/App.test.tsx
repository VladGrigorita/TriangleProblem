import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Max Number to Print label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Max Number to Print/i);
  expect(linkElement).toBeInTheDocument();
});
