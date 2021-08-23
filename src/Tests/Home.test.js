import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Pages/Home';

describe('Test Home component', () => {

  const home = render(<Home />);

  test('Testing Home component render', () => {
    home.getByText('Welcome to my calculator app.');
  });
});