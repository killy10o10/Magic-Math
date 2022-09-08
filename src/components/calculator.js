import React from 'react';
import Button from './Button';

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

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc">
        <input type="text" placeholder={0} className="calc-input" />
        <div className="btn-contain">
          {buttons.map((button) => (
            <Button key={button} btnName={button} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
