import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.PureComponent {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <button
        className={'tq-button' + (className ? ` ${className}` : '')}
        {...otherProps}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
