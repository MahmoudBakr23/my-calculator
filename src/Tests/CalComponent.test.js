import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../Components/Calculator';

describe('Test Calculator component', () => {
  const calculator = render(<Calculator />);

  test('Testing calculator component render', () => {
    calculator.getByText('AC');
    calculator.getByText('+');
    calculator.getByText('×');
    calculator.getByText('÷');
    calculator.getByText('%');
    calculator.getByText('=');
    calculator.getByText('+/-');
  });
});
