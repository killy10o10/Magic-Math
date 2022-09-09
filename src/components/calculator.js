import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const buttons = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => {
  const [solution, setSolution] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const Target = e.target.textContent;
    setSolution(calculate(solution, Target));
  };
  const { total, next, operation } = solution;
  return (
    <div className="calc">
      <input
        type="text"
        placeholder={0}
        className="calc-input"
        disabled
        value={
          (total === null ? '' : total)
          + (operation === null || operation === undefined ? '' : operation)
          + (next === null ? '' : next)
        }
      />
      <div className="btn-contain">
        {buttons.map((button) => (
          <Button key={button} btnName={button} event={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
