import React from 'react';
import classnames from 'classnames';

class Text extends React.Component {
  render() {
    const className = classnames('text', `text--${this.props.weight}`, `text--${this.props.color}`);
    switch (this.props.tag) {
      case 'span': return <span className={className} style={{ ...this.props.style }}>{this.props.content}</span>;
      case 'p': return <p className={className} style={{ ...this.props.style }}>{this.props.content}</p>;
      default: return <span className={className} style={{ ...this.props.style }}>{this.props.content}</span>;
    }
  }
}

Text.defaultProps = {
  tag: 'span'
};

export default Text;
