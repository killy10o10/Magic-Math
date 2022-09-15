import operate from '../logic/operate';

describe('Tests for calculate', () => {
  test('plusOperator', () => {
    const plusOperator = operate(2, 3, '+');
    expect(plusOperator).toBe('5');
  });
});
