import React from 'react';
import classnames from 'classnames';

export default class extends React.Component {
  render() {
    const className = classnames({
      [`card card--level-${this.props.level}`]: true
    });
    return (
      <div className={className}>
        { this.props.children }
      </div>
    );
  }
}
