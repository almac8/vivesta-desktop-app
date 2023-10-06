import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from './Main';

test('Renders the title', () => {
  render(<Main />);
  const title = screen.getByText(/Vivesta/i);
  expect(title).toBeInTheDocument();
});
