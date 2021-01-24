import React from 'react';
import { render, screen } from '@testing-library/react';

import Appbar from '../components/Appbar';

describe('Appbar', () => {
  test('renders App component', () => {
    render(<Appbar />);

    expect(screen.getByText('Books App')).toBeInTheDocument();
  });
});
