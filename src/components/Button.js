import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { btnName } = this.props;
    return (
      <div className="btn-div">
        <button type="button" className="btn">
          {btnName}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
