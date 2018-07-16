import React from 'react';
import classnames from 'classnames';

class ButtonWithIcon extends React.Component {
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

ButtonWithIcon.defaultProps = {
  onClick() {
    console.log('onClick: Not implemented');
  }
};
