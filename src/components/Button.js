import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { btnName, event } = this.props;
    return (
      <div className="btn-div">
        <button type="button" className="btn" onClick={event}>
          {btnName}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Button;
