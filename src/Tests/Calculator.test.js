import calculate from '../logic/calculate';

describe('Test calculate function', () => {
  let state = {
    total: null,
    next: null,
    operation: null,
  };
  const times = ['5', '×', '7', '='];
  
  test('Test times operations', () => {
    times.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('35');
  });

  const sum = ['5', '+', '7', '='];
  
  test('Test sum operations', () => {
    sum.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('12');
  });

  const subtract = ['5', '-', '7', '='];
  
  test('Test subtract operations', () => {
    subtract.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('-2');
  });
  
  const divide = ['5', '÷', '5', '='];
  
  test('Test divide operations', () => {
    divide.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('1');
  });

  const negate = ['5', '+/-', '+', '4', '='];
  
  test('Test negate operations', () => {
    negate.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('-1');
  });

  const percent = ['8', '%', '3', '='];
  
  test('Test percent operations', () => {
    percent.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual('2');
  });

  const acBtn = ['5', '×', '7', '=', 'AC'];
  
  test('Test acBtn operations', () => {
    acBtn.forEach((i) => {
      state = { ...state, ...calculate(state, i) };
    });
    const { total } = state;
    expect(total).toEqual(null);
  });
});
