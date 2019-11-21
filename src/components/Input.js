import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends React.PureComponent {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <input
        className={'tq-input' + (className ? ` ${className}` : '')}
        {...otherProps}
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
