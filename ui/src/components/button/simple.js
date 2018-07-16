import React from 'react';
import classnames from 'classnames';

class Button extends React.Component {
  render() {
    const className = classnames('button', `button--${this.props.type || 'default'}`, this.props.className);
    return (
      <button
        className={className}
        type={this.props.htmlType}
        onClick={this.props.onClick}
        style={{ ...this.props.style }}
      >
        { this.props.children }
      </button>
    );
  }
}

Button.defaultProps = {
  onClick() {
    console.log('onClick: Not implemented');
  }
};

export default Button;
