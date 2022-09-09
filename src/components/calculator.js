import React from 'react';
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

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const Target = e.target.textContent;
    this.setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      Target,
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc">
        <input
          type="text"
          placeholder={0}
          className="calc-input"
          disabled
          value={
            (total === null ? '' : total)
            + (operation === null ? '' : operation)
            + (next === null ? '' : next)
          }
        />
        <div className="btn-contain">
          {buttons.map((button) => (
            <Button key={button} btnName={button} event={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
