import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../Pages/Quote';

describe('Test Quote component', () => {

  const quote = render(<Quote />);

  test('Testing Quote component render', () => {
    quote.getByText('You will not get unless you do!');
  });
});