import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        valid={this.props.valid}
        touched={this.props.touched}
        placeholder={this.props.placeholder}
        className="input"
      />
    );
  }
}
