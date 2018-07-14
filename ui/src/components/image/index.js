import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <img
        className="image"
        src={this.props.source}
        height={this.props.height}
        width={this.props.width}
        radius={`${this.props.radius}%`}
        alt={this.props.alt || 'default-alt'}
      />
    );
  }
}
