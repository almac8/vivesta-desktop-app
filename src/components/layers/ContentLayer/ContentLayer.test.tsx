import React from 'react';
import { render, screen } from '@testing-library/react';

import ContentLayer from './ContentLayer';

test('Renders the title', () => {
  render(<ContentLayer />);
});
