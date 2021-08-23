import operate from '../logic/operate';

describe('Test operate function', () => {
  test('Sum operation', () => {
    const one = '9';
    const two = '4';
    const result = operate(one, two, '+');
    expect(result).toEqual('13');
  });

  test('Subtract operation', () => {
    const one = '16';
    const two = '3';
    const result = operate(one, two, '-');
    expect(result).toEqual('13');
  });

  test('Times operation', () => {
    const one = '6.5';
    const two = '2';
    const result = operate(one, two, '×');
    expect(result).toEqual('13');
  });

  test('Division operation', () => {
    const one = '26';
    const two = '2';
    const result = operate(one, two, '÷');
    expect(result).toEqual('13');
  });

  test('Percentage operation', () => {
    const one = '8';
    const two = '3';
    const result = operate(one, two, '%');
    expect(result).toEqual('2');
  });
});
