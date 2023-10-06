import React from 'react';
import { render } from '@testing-library/react';

import NavMenu from './NavMenu';

test('Renders the Navigation Menu', () => {
  render(<NavMenu />);
});