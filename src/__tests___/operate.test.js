import operate from '../logic/operate';

describe('Tests for calculate', () => {
  test('plusOperator', () => {
    const plusOperator = operate(2, 3, '+');
    expect(plusOperator).toBe('5');
  });
  test('Should return the 10-5 = 5', () => {
    const minus = operate(10, 5, '-');
    expect(minus).toBe('5');
  });

  test('Should return the 10 x 5 = 50', () => {
    const multiply = operate(10, 5, 'x');
    expect(multiply).toBe('50');
  });

  test('Should return the 10÷5 = 5', () => {
    const divide = operate(10, 5, '÷');
    expect(divide).toBe('2');
  });

  test('Should return the 10%5 = 0', () => {
    const modulo = operate(10, 5, '%');
    expect(modulo).toBe('0');
  });
});
