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
    calculator.getByText('1');
    calculator.getByText('2');
    calculator.getByText('3');
    calculator.getByText('4');
    calculator.getByText('5');
    calculator.getByText('6');
    calculator.getByText('7');
    calculator.getByText('8');
    calculator.getByText('9');
    calculator.getByText('.');
  });
});
