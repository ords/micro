import React from 'react';
import { render, screen } from '@testing-library/react';
import CleanLayout from './CleanLayout';

test('renders learn react link', () => {
  render(<CleanLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
