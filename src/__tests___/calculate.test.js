import calculate from '../logic/calculate';

describe('Tests for calculate', () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

  test('For number 2 button', () => {
    const numberTwo = calculate(state, '2');
    expect(numberTwo.next).toBe('2');
  });
  test('For number 0 button', () => {
    const numberZero = calculate(state, '0');
    expect(numberZero.next).toBe('0');
  });
  test('For +/- button', () => {
    expect(
      calculate({ total: '3', next: null, operation: null }, '+/-'),
    ).toEqual({ total: '-3', next: null, operation: null });
  });
  test('For point (.) button', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '.')).toEqual(
      { total: '3', next: '3.', operation: null },
    );
  });
  test('plus operator', () => {
    const plusOperator = calculate(state, '+');
    expect(plusOperator.operation).toBe('+');
  });
  test('modulo operator', () => {
    const moduloOperator = calculate(state, '%');
    expect(moduloOperator.operation).toBe('%');
  });
  test('minus operator', () => {
    const minusOperator = calculate(state, '-');
    expect(minusOperator.operation).toBe('-');
  });
  test('multiply operator', () => {
    const multiplyOperator = calculate(state, 'x');
    expect(multiplyOperator.operation).toBe('x');
  });
  test('AC button', () => {
    const ACButton = calculate(state, 'AC');
    expect(ACButton.next && ACButton.total && ACButton.operation).toBe(null);
  });
  test('Equal button', () => {
    expect(calculate({ total: '3', next: '4', operation: '+' }, '=')).toEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });
  test('Present right result using equal (=) button', () => {
    calculate(state, 'AC');
    const equal = calculate(
      calculate(calculate(calculate(state, '5'), '+'), '5'),
      '=',
    );
    expect(equal.total).toBe('10');
  });
});
